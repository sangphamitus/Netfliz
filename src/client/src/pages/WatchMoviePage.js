import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Button,
  Input,
  Text,
  NavBar,
  Footer,
  ListMovies,
  Comment,
} from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function WatchMoviePage() {
  const [movie, setMovie] = React.useState({});

  const [newMovies, setNewMovies] = useState([]);
  const [episode, setEpisode] = useState([]);
  const search = useLocation().search;
  const [cmt, setCmt] = React.useState([]);
  const [inputCmt, setInputCmt] = React.useState("");
  const vid = new URLSearchParams(search).get("vid");
  const fetchNewMoviesData = async () => {
    axios.post(`${process.env.REACT_APP_ENDPOINT}videos/new`).then((res) => {
      console.log(res.data.data);
      setNewMovies(res.data.data);
    });
  };

  const postComment = async () => {
    if (inputCmt !== "") {
      axios
        .post(`${process.env.REACT_APP_ENDPOINT}comments/post`, {
          vid: vid,

          uid: localStorage.getItem("uid"),
          content: inputCmt,
        })
        .then((res) => {
          console.log(res.data.data);
          setCmt(res.data.data);

          setInputCmt("");
        });
    }
  };

  React.useEffect(() => {
    fetchNewMoviesData();
    axios
      .post(`${process.env.REACT_APP_ENDPOINT}videos/get`, {
        vid: vid,
      })
      .then((res) => {
        console.log(res.data.data);
        setMovie(res.data.data);
      });
  }, []);

  React.useEffect(() => {
    if (movie.haveEp == null) return;
    axios
      .post(`${process.env.REACT_APP_ENDPOINT}videos/getEp`, {
        eid: movie.haveEp,
      })
      .then((res) => {
        console.log(res.data.data);
        setEpisode(res.data.data);
      });
  }, [movie]);

  React.useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_ENDPOINT}comments/getpost`, {
        vid: vid,
      })
      .then((res) => {
        console.log(res.data.data);
        setCmt(res.data.data);
      });
  }, []);

  return (
    <div className="App bg-[#082032] pt-14">
      <NavBar />
      <iframe
        className="w-full h-[16rem] sm:h-[27rem] lg:h-[42rem] xl:h-[56rem] sm:mb-14 mb-5"
        src={movie.link}
        title={movie.name}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />

      {episode.length > 0 && (
        <ListMovies title={"EPISODES"} list_movies_data={episode} />
      )}

      <div className="bg-[#2D2F3D] min-h-[18rem] h-full my-10 mx-5 pb-3">
        <Text
          text="Comments"
          customTheme="text-[2rem] px-5 text-white"
          isHeader={true}
        />
        {localStorage.getItem("uid") !== null &&
          localStorage.getItem("uid") !== "null" && (
            <div className="flex flex-row max-sm:flex-col max-sm:items-center max-sm:space-y-3 px-5 my-5">
              <Input
                containerTheme="w-full min-w-[0px] h-10"
                inputTheme="h-full"
                onChange={(e) => {
                  setInputCmt(e.target.value);
                }}
              />
              <Button
                theme="bg-pink-600 rounded-2xl w-auto h-auto px-3 mx-3 px-4"
                onClick={postComment}
              >
                <Text
                  customTheme="text-[2rem] leading-none text-gray-200 font-button"
                  isHeader={false}
                  text="Comment"
                />
              </Button>
            </div>
          )}

        <div className="my-5">
          {cmt.map((item) => {
            return <Comment key={item.key} item={item} />;
          })}
        </div>
      </div>

      <ListMovies title={"NEW MOVIES"} list_movies_data={newMovies} />

      <Footer />
    </div>
  );
}

export default {
  routeProps: {
    path: "/watch",
    main: WatchMoviePage,
  },
};
