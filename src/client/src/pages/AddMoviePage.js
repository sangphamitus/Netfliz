import React from "react";
import { Button, Input, Text, NavBar, Footer } from "../components";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddMoviePage() {
  const [isChosen, setIsChosen] = React.useState({
    link: null,
    name: null,
    image: null,
    ratting: 0,
    haveEp: null,
    review: "",
    type: [null, null, null],
  });
  const [allEpisode, setAllEpisode] = React.useState([]);
  const [episodeChosen, setEpisodeChosen] = React.useState(null);
  const [createEp, setCreateEp] = React.useState(false);
  const [collectionName, setCollectionName] = React.useState("");
  const [upload, setUpload] = React.useState(false);
  const [file, setFile] = React.useState({});

  const categoryType = [
    { value: "null", text: "null" },
    { value: "action", text: "Action" },
    { value: "anime", text: "Anime" },
    { value: "comedy", text: "Comedy" },
    { value: "dramas", text: "Dramas" },
    { value: "romance", text: "Romance" },
  ];

  const saveSubmit = async (e) => {
    let typeString = "";
    isChosen.type.forEach((each) => {
      if (each !== "null") {
        if (typeString.length > 0) {
          typeString += ",";
        }
        typeString += each;
      }
    });

    var d2 = new Date(
      new Date().getUTCFullYear(),
      new Date().getUTCMonth(),
      new Date().getUTCDate(),
      new Date().getUTCHours(),
      new Date().getUTCMinutes(),
      new Date().getUTCSeconds()
    );
    axios
      .post(`${process.env.REACT_APP_ENDPOINT}videos/add`, {
        link: isChosen.link,
        ratting: isChosen.ratting,
        name: isChosen.name,
        image: isChosen.image,
        haveEp: episodeChosen,
        review: isChosen.review,
        type: typeString,
        uid: localStorage.getItem("uid"),
        time: d2.toUTCString(),
      })
      .then((res) => {
        if (res.data.message === "success") {
          toast.success("Add video successfully", {
            autoClose: 2000,
            position: "bottom-left",
          });
          getAllEpisode();
          setCreateEp(false);
        } else {
          toast.error("Please try again", {
            autoClose: 2000,
            position: "bottom-left",
          });
        }
      });
    //vid,link,name,image,ratting,haveEp,review,type
  };
  const getAllEpisode = async () => {
    axios
      .post(`${process.env.REACT_APP_ENDPOINT}videos/getAllEp`)
      .then((res) => {
        console.log(res.data.data);

        setAllEpisode(res.data.data);
      });
  };
  const createCollection = async (e) => {
    e.preventDefault();

    if (collectionName.length === 0) return;
    axios
      .post(`${process.env.REACT_APP_ENDPOINT}videos/createEp`, {
        name: collectionName,
      })
      .then((res) => {
        console.log(res.data.data);
        if (res.data.message === "success") {
          toast.success("Created successfully", {
            autoClose: 2000,
            position: "bottom-left",
          });
          getAllEpisode();
          setCreateEp(false);
        } else {
          toast.error("Please try again", {
            autoClose: 2000,
            position: "bottom-left",
          });
        }
      });
  };

  React.useEffect(() => {
    if (localStorage.getItem("per") !== "true") {
      window.location.href = "/";
    }
    getAllEpisode();
  }, []);

  React.useEffect(() => {
    const temp = process.env.REACT_APP_ENDPOINT.concat("image/temp.jpg");
    setFile({
      imageSrc: temp,
      imageHash: Date.now(),
    });
  }, [upload]);

  const imageUpload = async () => {
    setUpload(false);
    var formData = new FormData();
    var imagefile = document.querySelector("#file");
    formData.append("imageUpload", imagefile.files[0]);

    axios
      .post(process.env.REACT_APP_ENDPOINT.concat("imageUpload"), formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.data.messages !== "fail") {
          console.log(res);
          setUpload(true);

          toast.success("Uploaded successfully", {
            autoClose: 2000,
          });
          // setInterval(() => {
          //   window.location.reload();
          // }, 1000);
        } else {
          toast.error("Please try again", {
            autoClose: 2000,
          });
        }
      });
  };

  return (
    <div className="App bg-[#082032]">
      <NavBar />
      <form className="mx-20 max-sm:mx-0" onSubmit={saveSubmit}>
        <div className="flex">
          <div className="pt-8 p-4 mb-2">
            <Text
              text="Movie Name:"
              customTheme="text-white font-button text-[25px] whitespace-nowrap"
            />
          </div>
          <Input
            inputTheme="p-4 h-10 max-w-xl w-full bg-black bg-opacity-25 border-2 rounded-xl text-white"
            id="movie_name"
            containerTheme="w-full justify-center"
            valuetext={isChosen.name}
            required
            onChange={(e) => {
              setIsChosen({
                ...isChosen,
                name: e.target.value,
              });
            }}
          />
        </div>
        <div className="flex">
          <div className="pt-8 p-4 mb-2">
            <Text
              text="Movie Review:"
              customTheme={
                "text-white font-button text-[25px] whitespace-nowrap"
              }
            />
          </div>
          <Input
            inputTheme="p-4 h-10 max-w-xl w-full bg-black bg-opacity-25 border-2 rounded-xl text-white"
            id="movie_content"
            containerTheme="w-full justify-center"
            valuetext={isChosen.review}
            required
            onChange={(e) =>
              setIsChosen({
                ...isChosen,
                review: e.target.value,
              })
            }
          />
        </div>
        <div className="flex">
          <div className="pt-8 p-4 mb-2">
            <Text
              text="Rating:"
              customTheme={
                "text-white font-button text-[25px] whitespace-nowrap"
              }
            />
          </div>
          <Input
            inputTheme="p-4 h-10 max-w-xl w-full bg-black bg-opacity-25 border-2 rounded-xl text-white"
            id="data_release"
            containerTheme="w-full justify-center"
            type="number"
            min="0"
            max="5"
            valuetext={isChosen.ratting}
            required
            onChange={(e) =>
              setIsChosen({
                ...isChosen,
                ratting: e.target.value,
              })
            }
          />
        </div>
        <div className="flex items-center">
          <div className="flex space-x-7 pt-8 p-4 mb-3">
            <Text
              text="Banner URL:"
              customTheme="text-white font-button text-[25px] whitespace-nowrap"
            />
            <Input
              inputTheme="h-fit p-1 max-w-xl w-full bg-black bg-opacity-25 border-2 rounded-xl text-white"
              id="file"
              containerTheme="w-fit justify-center"
              valuetext={isChosen.image}
              required
              onChange={(e) =>
                setIsChosen({
                  ...isChosen,
                  image: e.target.value,
                })
              }
              type="file"
              name="imageUpload"
              accept="image/png, image/jpeg"
            />
          </div>

          <Button
            theme="bg-pink-600 rounded-[5px] w-28 h-10 text-white"
            onClick={() => {
              setUpload(false);
              imageUpload();
            }}
          >
            UPLOAD
          </Button>
        </div>
        <img
          className="h-full w-auto max-h-72"
          alt="img-preview"
          key={Date.now()}
          id="uploadedImg"
          src={`${file.imageSrc}?${file.imageHash}`}
        />
        <div className="flex">
          <div className="pt-8 p-4 mb-2">
            <Text
              text="Video URL: "
              customTheme="text-white font-button text-[25px] whitespace-nowrap"
            />
          </div>
          <Input
            inputTheme="p-4 h-10 max-w-xl w-full bg-black bg-opacity-25 border-2 rounded-xl text-white"
            id="director"
            containerTheme="w-full justify-center"
            valuetext={isChosen.link}
            required
            onChange={(e) =>
              setIsChosen({
                ...isChosen,
                link: e.target.value,
              })
            }
          />
        </div>
        <div className="flex">
          <div className="pt-8 p-4 mb-2">
            <Text
              text="TAGS"
              customTheme="text-white font-button text-[25px] whitespace-nowrap"
            />
          </div>
          <div className="flex flex-row flex-wrap space-y-3 w-8 pt-8 p-4 mb-2">
            <select
              id="tags"
              className="bg-[#082032] rounded-[5px] text-white border-2 border-white border-solid"
              value={isChosen.type[0]}
              required
              onChange={(e) => {
                setIsChosen({
                  ...isChosen,
                  type: [e.target.value, isChosen.type[1], isChosen.type[2]],
                });
              }}
            >
              {categoryType.map((option) => {
                return (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                );
              })}
            </select>
            <select
              id="tags_1"
              className=" mr-10 bg-[#082032] rounded-[5px] text-white border-2 border-white border-solid"
              value={isChosen.type[1]}
              onChange={(e) => {
                setIsChosen({
                  ...isChosen,
                  type: [isChosen.type[0], e.target.value, isChosen.type[2]],
                });
              }}
            >
              {categoryType.map((option) => {
                return (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                );
              })}
            </select>
            <select
              id="tags_2"
              className=" mr-10 bg-[#082032] rounded-[5px] text-white border-2 border-white border-solid"
              value={isChosen.type[2]}
              onChange={(e) => {
                setIsChosen({
                  ...isChosen,
                  type: [isChosen.type[0], isChosen.type[1], e.target.value],
                });
              }}
            >
              {categoryType.map((option) => {
                return (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="flex">
          <div className="pt-8 p-4 mb-2">
            <Text
              text="Collection:"
              customTheme={
                "text-white font-button text-[25px] whitespace-nowrap"
              }
            />
          </div>
          <div className="flex w-8 pt-8 p-4 mb-2">
            <select
              id="tags"
              className="mr-10 bg-[#082032] rounded-[5px] text-white border-2 border-white border-solid"
              value={episodeChosen}
              onChange={(e) => {
                setEpisodeChosen(e.target.value);
                if (e.target.value === "addNew") {
                  setCreateEp(true);
                } else {
                  setCreateEp(false);
                }
              }}
            >
              <option value="null"> null </option>
              {allEpisode.map((each) => {
                return (
                  <option key={each.id} value={each.eid}>
                    {each.collectionName}
                  </option>
                );
              })}
              <option value="addNew"> +New Episode </option>
            </select>
          </div>
        </div>
        {createEp && (
          <div className="flex flex-wrap">
            <div className="p-4 mb-2">
              <Text
                text="Create Collection"
                customTheme="text-white font-button text-[25px] whitespace-nowrap"
              />
            </div>
            <div className="flex flex-row p-4 mb-2 justify-center">
              <Text
                text="Collection Name:"
                customTheme="text-white font-button text-[25px] whitespace-nowrap pr-3"
              />
              <Input
                inputTheme="p-4 h-10 max-w-xl w-full bg-black bg-opacity-25 border-2 rounded-xl text-white"
                id="Episode_name"
                containerTheme="w-full justify-center"
                valuetext={collectionName}
                onChange={(e) => setCollectionName(e.target.value)}
              />
              <Button
                theme="ml-3 bg-pink-600 rounded-[5px] min-w-fit w-full max-w-[7rem]"
                onClick={(e) => createCollection(e)}
              >
                <Text
                  text="CREATE"
                  customTheme="text-white font-button text-[25px]"
                />
              </Button>
            </div>
          </div>
        )}
        <div className="flex py-20 justify-evenly">
          <Button theme="bg-pink-600 rounded-[5px] w-28 h-10" type="submit">
            <Text
              text="SAVE"
              customTheme="text-white font-button text-[25px]"
            />
          </Button>
          <Button
            theme="bg-pink-600 rounded-[5px] w-28 h-10"
            onClick={(e) => {
              window.location.href = "/admin";
            }}
          >
            <Text
              text="BACK"
              customTheme="text-white font-button text-[25px]"
            />
          </Button>
        </div>
      </form>
      <ToastContainer />
      <Footer />
    </div>
  );
}
export default {
  routeProps: {
    path: "/addMovie",
    main: AddMoviePage,
  },
};
