import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";

import { Button, Input, Text, NavBar, Footer, Rate } from "../components";

function MovieInfoPage() {
  const [movie, setMovie] = React.useState({});
  const search = useLocation().search;
  const navigate = useNavigate();
  const watchingAccessing = () => {
    navigate(`/watch?vid=${new URLSearchParams(search).get("vid")}`);
  };
  React.useEffect(() => {
    const vid = new URLSearchParams(search).get("vid");

    axios
      .post(`${process.env.REACT_APP_ENDPOINT}videos/get`, {
        vid: vid,
      })
      .then((res) => {
        console.log(res.data.data);
        setMovie(res.data.data);
      });
  }, []);
  return (
    <div className="App bg-[#082032]">
      <NavBar />
      <div className="relative">
        <img
          className="w-full h-[620px] z-0"
          src={movie.image}
          title={movie.name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></img>
        <div className="absolute bottom-0 pl-9">
          <Text
            text={movie.name}
            isHeader={true}
            className="pl"
            customTheme={"text-6xl text-white mb-48"}
          />
          <div className="mb-10 flex flex-row">
            <Button
              theme={"bg-white w-auto h-auto mx-3 px-4 flex items-center"}
              onClick={(e) => {
                watchingAccessing();
              }}
            >
              <FontAwesomeIcon icon={faPlay} className="pb-1" />
              <Text
                customTheme="text-[2rem] leading-none text-black font-button"
                isHeader={false}
                text="Watch"
              />
            </Button>
            <Button
              theme={"bg-white w-auto h-auto mx-3 px-4 flex items-center"}
            >
              <FontAwesomeIcon icon={faPlus} className="pb-1" />
              <Text
                customTheme="text-[2rem] leading-none text-black font-button"
                isHeader={false}
                text="List"
              />
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full px-7">
        <Rate rateinput={movie.ratting} />
        <p className="text-white font-normal h-full ">{movie.review}</p>
      </div>

      <div className="bg-[#E5E5E5] w-auto min-h-[18rem] h-auto my-10 mx-5">
        <Text
          text={"Comments"}
          customTheme={"text-[2rem] px-5"}
          isHeader={true}
        />
        <div className="flex px-5 my-5">
          <Input containerTheme={"min-w-[38rem] pt-0"} />
          <Button
            theme={"bg-pink-600 rounded-2xl w-auto h-auto px-3 mx-3 px-4"}
          >
            <Text
              customTheme="text-[2rem] leading-none text-gray-200 font-button"
              isHeader={false}
              text="Comment"
            />
          </Button>
        </div>

        <div>{/* show comments */}</div>
      </div>

      <Footer />
    </div>
  );
}

export default {
  routeProps: {
    path: "/info",
    main: MovieInfoPage,
  },
};
