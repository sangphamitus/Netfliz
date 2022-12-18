import React, { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { ListMovies } from "../components/ListMovies";
import axios from "axios";

function CategoriesPage() {
  const [actionMovies, setActionMovies] = useState([]);
  const [dramasMovies, setDramasMovies] = useState([]);

  const fetchActionMoviesData = async () => {
    axios.post(`${process.env.REACT_APP_ENDPOINT}videos/action`).then((res) => {
      console.log(res.data.data);
      setActionMovies(res.data.data);
    });
  };
  const fetchDramasMoviesData = async () => {
    axios.post(`${process.env.REACT_APP_ENDPOINT}videos/dramas`).then((res) => {
      console.log(res.data.data);
      setDramasMovies(res.data.data);
    });
  };
  useEffect(() => {
    fetchActionMoviesData();
    fetchDramasMoviesData();
  }, []);
  return (
    <div className="App bg-[#082032]">
      <NavBar isLogin={false} allowSearch={true} />
      <ListMovies title={"ACTION MOVIES"} list_movies_data={actionMovies} />
      <ListMovies title={"DRAMAS MOVIES"} list_movies_data={dramasMovies} />
      <Footer />
    </div>
  );
}

export default {
  routeProps: {
    path: "/categories",
    main: CategoriesPage,
  },
};
