import React from "react";
import {
  Button,
  Input,
  Text,
  NavBar,
  Footer,
  Card,
  ListMovies,
} from "../components";
import ProfileImage from "../assets/images/profile.png";
import JohnWick from "../assets/images/John Wick - Movie Post.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ProfilePage() {
  const navigate = useNavigate();
  const [info, setInfo] = React.useState({});
  const [infoChange, setInfoChange] = React.useState({});
  const [isChanging, setIsChanging] = React.useState(false);

  const uid = localStorage.getItem("uid");
  const [isChangingPassword, setIsChangingPassword] = React.useState(false);
  const [password, setPassword] = React.useState({
    uid,
    oldPass: "",
    newPass: "",
    newrePass: "",
  });

  const logOut = () => {
    localStorage.removeItem("uid");
    navigate({
      pathname: "/",
    });
  };

  const saveSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_ENDPOINT}userinfo/changeInfo`, {
        ...info,
      })
      .then((res) => {
        console.log(res.data.data);
        setInfo(res.data.data);
        setInfoChange(res.data.data);
        setIsChanging(false);
      });
  };
  const savePassSubmit = async (e) => {
    if (
      password.newPass !== password.newrePass ||
      password.oldPass === "" ||
      password.newPass === ""
    ) {
      return;
    }
    axios
      .post(`${process.env.REACT_APP_ENDPOINT}users/changePass`, {
        uid,
        password: password.oldPass,
        newpassword: password.newPass,
      })
      .then((res) => {
        console.log(res.data.result);
        if (res.data.result) {
          alert("Change password successed");
          logOut();
        } else {
          alert("please try again");
        }
        setIsChanging(false);
        setIsChangingPassword(false);
      });
  };
  React.useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_ENDPOINT}userinfo/get`, {
        uid,
      })
      .then((res) => {
        console.log(res.data.data);
        setInfo(res.data.data);
        setInfoChange(res.data.data);
      });
  }, []);
  const rmMovie = async (vid) => {
    axios
      .post(`${process.env.REACT_APP_ENDPOINT}userinfo/rmMovie`, {
        uid,
        vid: vid,
      })
      .then((res) => {
        console.log(res.data.data);
        setInfo(res.data.data);
        setInfoChange(res.data.data);
      });
    window.location.href = "/profile";
  };
  return (
    <div className="App bg-[#082032]">
      <NavBar />
      <div className="md:mx-36 mx-5">
        <div className="flex md:py-14 py-5 border-b-2">
          <div>
            <img
              src={ProfileImage}
              alt="profileImage"
              className="md:w-64 max-sm:w-48"
            />
          </div>
          <div className="flex flex-col justify-between">
            {isChanging === false && (
              <div className="md:pl-12 pl-3 pr-4 text-left flex flex-col">
                <Text
                  text={`NAME: ${info.name}`}
                  isHeader={false}
                  customTheme="text-white font-button"
                  style={{
                    fontSize: "calc(.6rem + 1.5vw)",
                  }}
                />
                <Text
                  text={`Date of birth: ${info.dob}`}
                  isHeader={false}
                  customTheme="text-white font-button"
                  style={{
                    fontSize: "calc(.6rem + 1.5vw)",
                  }}
                />
                <Text
                  text={`ID: ${info.uid}`}
                  isHeader={false}
                  customTheme="text-white font-button"
                  style={{
                    fontSize: "calc(.6rem + 1.5vw)",
                  }}
                />
              </div>
            )}
            {isChanging === true && (
              <div className="md:pl-12 pl-3 pr-4 text-left flex flex-col">
                <div className="flex">
                  <div className="pt-8 p-4 mb-2">
                    <Text
                      text="Name:"
                      customTheme={"text-white font-button whitespace-nowrap"}
                      style={{
                        fontSize: "calc(.6rem + 1.5vw)",
                      }}
                    />
                  </div>
                  <Input
                    id="name_input"
                    containerTheme="w-full justify-center"
                    valuetext={info.name}
                    onChange={(e) => setInfo({ ...info, name: e.target.value })}
                  />
                </div>
                <div className=" flex">
                  <div className="pt-8 p-4 mb-2">
                    <Text
                      text={"Date of birth:"}
                      customTheme={"text-white font-button whitespace-nowrap"}
                      style={{
                        fontSize: "calc(.6rem + 1.5vw)",
                      }}
                    />
                  </div>
                  <Input
                    id="name_input"
                    containerTheme="w-full justify-center"
                    type={"date"}
                    valuetext={info.dob}
                    onChange={(e) => setInfo({ ...info, dob: e.target.value })}
                  />
                </div>
                <div className=" flex">
                  <div className="pt-8 p-4 mb-2">
                    <Text
                      text={"ID:"}
                      customTheme={"text-white font-button whitespace-nowrap"}
                      style={{
                        fontSize: "calc(.6rem + 1.5vw)",
                      }}
                    />
                  </div>
                  <Input
                    id="name_input"
                    containerTheme="w-full justify-center"
                    type={"date"}
                    valuetext={info.uid}
                    readonly={true}
                  />
                </div>
              </div>
            )}
            {isChangingPassword === true && (
              <div className="pl-12 pr-4 text-left flex flex-col">
                <div className="flex">
                  <div className="pt-8 p-4 mb-2">
                    <Text
                      text={"Old password:"}
                      customTheme={
                        "text-white font-button text-[25px] whitespace-nowrap"
                      }
                    />
                  </div>
                  <Input
                    id="name_input"
                    containerTheme={"w-full"}
                    type={"password"}
                    valuetext={password.oldPass}
                    onChange={(e) =>
                      setPassword({ ...password, oldPass: e.target.value })
                    }
                  ></Input>
                </div>
                <div className="flex">
                  <div className="pt-8 p-4 mb-2">
                    <Text
                      text={"New password:"}
                      customTheme={
                        "text-white font-button text-[25px] whitespace-nowrap"
                      }
                    />
                  </div>
                  <Input
                    id="name_input"
                    containerTheme={"w-full"}
                    type={"password"}
                    valuetext={password.newPass}
                    onChange={(e) =>
                      setPassword({ ...password, newPass: e.target.value })
                    }
                  ></Input>
                </div>
                <div className="flex">
                  <div className="pt-8 p-4 mb-2">
                    <Text
                      text={"Retype password:"}
                      customTheme={
                        "text-white font-button text-[25px] whitespace-nowrap"
                      }
                    />
                  </div>
                  <Input
                    id="name_input"
                    containerTheme={"w-full"}
                    type={"password"}
                    valuetext={password.newrePass}
                    onChange={(e) =>
                      setPassword({ ...password, newrePass: e.target.value })
                    }
                  ></Input>
                </div>
                {password.newPass !== password.newrePass && (
                  <p className="text-white">
                    password and retype password not match{" "}
                  </p>
                )}
              </div>
            )}
            {isChanging === false && isChangingPassword === false && (
              <div className="flex flex-col ml-12">
                <a
                  className="text-white w-fit hover:bg-pink-600 font-button cursor-pointer"
                  style={{
                    fontSize: "calc(.8rem + 1vw)",
                  }}
                  onClick={(e) => setIsChanging(true)}
                >
                  CHANGE PROFILE
                </a>
                <a
                  className="text-white w-fit hover:bg-pink-600 font-button cursor-pointer"
                  style={{
                    fontSize: "calc(.8rem + 1vw)",
                  }}
                  onClick={(e) => setIsChangingPassword(true)}
                >
                  CHANGE PASSWORD
                </a>
              </div>
            )}
            {isChanging === true && (
              <div className="flex justify-evenly">
                <Button
                  theme="bg-pink-600 rounded-none w-24 h-10"
                  onClick={(e) => {
                    setIsChanging(false);
                    setInfo(infoChange);
                  }}
                >
                  <p className="text-2xl font-button text-black">CANCEL</p>
                </Button>
                <Button
                  theme="bg-pink-600 rounded-none w-24 h-10"
                  onClick={(e) => saveSubmit(e)}
                >
                  <p className="text-2xl font-button text-black">SAVE</p>
                </Button>
              </div>
            )}
            {isChangingPassword === true && (
              <div className="flex">
                <Button
                  theme="bg-[#CD0574] ml-auto w-24 h-12 rounded-none flex justify-center items-center"
                  onClick={(e) => {
                    setIsChangingPassword(false);
                    setPassword({
                      uid,
                      oldPass: "",
                      newPass: "",
                      newrePass: "",
                    });
                  }}
                >
                  <p className="text-2xl font-button text-black">CANCEL</p>
                </Button>
                <Button
                  theme="bg-[#CD0574] ml-auto w-24 h-12 rounded-none flex justify-center items-center"
                  onClick={(e) => {
                    savePassSubmit(e);
                  }}
                >
                  <p className="text-2xl font-button text-black">SAVE</p>
                </Button>
              </div>
            )}
          </div>
          {/* <div className="h-[181px] grid">
          <Text
            text={"User Name"}
            isHeader={false}
            customTheme={"text-white font-button text-2xl "}
          />
          <Text
            text={"03/07/2002"}
            isHeader={false}
            customTheme={"text-white font-button text-2xl "}
          />
          <Text
            text={"20120385"}
            isHeader={false}
            customTheme={"text-white font-button text-2xl "}
          />
          <Text
            text={"tranhoangtin3702@gmail.com"}
            isHeader={false}
            customTheme={"text-white font-button text-2xl "}
          />
        </div> */}
        </div>
        <div className="py-14">
          <Text
            text={"Your playlists"}
            isHeader={true}
            customTheme={"text-pink-600 font-button text-4xl "}
          />
          <div className="grid items-center justify-between grid-cols-3 my-5">
            {info.listMovie &&
              info.listMovie.map((each, i) => {
                return (
                  <Card
                    key={i}
                    imgSrc={each.img}
                    vid={each.vid}
                    canEdit={true}
                    onTrashClick={(e) => {
                      rmMovie(each.vid);
                    }}
                    className={"max-w-xs mt-8"}
                  />
                );
              })}
          </div>
          <Button
            theme="bg-[#CD0574] ml-auto w-24 h-12 rounded-none flex justify-center items-center"
            onClick={logOut}
          >
            <p className="text-2xl font-button text-black">LOG OUT</p>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default {
  routeProps: {
    path: "/profile",
    main: ProfilePage,
  },
};
