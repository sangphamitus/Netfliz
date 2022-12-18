import React, { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Banner } from "../components/Banner";
import { ListMovies } from "../components/ListMovies";
import axios from "axios";

function HomePage() {
  const [newMovies, setNewMovies] = useState([]);
  const [hotMovies, setHotMovies] = useState([]);

  const fetchNewMoviesData = async () => {
    axios.post(`${process.env.REACT_APP_ENDPOINT}videos/new`).then((res) => {
      console.log(res.data.data);
      setNewMovies(res.data.data);
    });
  };
  const fetchHotMoviesData = async () => {
    axios.post(`${process.env.REACT_APP_ENDPOINT}videos/hot`).then((res) => {
      console.log(res.data.data);
      setHotMovies(res.data.data);
    });
  };
  useEffect(() => {
    fetchNewMoviesData();
    fetchHotMoviesData();
  }, []);

  return (
    <div className="App bg-[#082032]">
      <div className="fixed top-0 overflow-hidden w-full z-10">
        <NavBar isLogin={false} allowSearch={true} />
      </div>
      <Banner />
      <ListMovies title={"NEW MOVIES"} list_movies_data={newMovies} />
      <ListMovies title={"HOT MOVIES"} list_movies_data={hotMovies} />
      <Footer />
    </div>
  );
}

export default {
  routeProps: {
    path: "/",
    main: HomePage,
  },
};
