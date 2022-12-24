import React, { useEffect, useState } from "react";
import { NavBar, Footer, Banner, ListMovies } from "../components";
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
      <NavBar allowSearch={true} />
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
