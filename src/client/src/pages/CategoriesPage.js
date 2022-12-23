import React, { useEffect, useState } from "react";
import { NavBar, Footer, ListMovies } from "../components";
import axios from "axios";

function CategoriesPage() {
  const [actionMovies, setActionMovies] = useState([]);
  const [dramasMovies, setDramasMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [animeMovies, setAnimeMovies] = useState([]);

  const fetchActionMoviesData = async () => {
    axios.post(`${process.env.REACT_APP_ENDPOINT}videos/filter`,{
      type:"action"
    }).then((res) => {
      console.log(res.data.data);
      setActionMovies(res.data.data);
    });
  };
  const fetchDramasMoviesData = async () => {
    axios.post(`${process.env.REACT_APP_ENDPOINT}videos/filter`,{
      type:"dramas"
    }).then((res) => {
      console.log(res.data.data);
      setDramasMovies(res.data.data);
    });
  };
  const fetchRomanceMoviesData = async () => {
    axios.post(`${process.env.REACT_APP_ENDPOINT}videos/filter`,{
      type:"romance"
    }).then((res) => {
      console.log(res.data.data);
      setRomanceMovies(res.data.data);
    });
  };
  const fetchComedyMoviesData = async () => {
    axios.post(`${process.env.REACT_APP_ENDPOINT}videos/filter`,{
      type:"comedy"
    }).then((res) => {
      console.log(res.data.data);
      setComedyMovies(res.data.data);
    });
  };
  const fetchAnimeMoviesData = async () => {
    axios.post(`${process.env.REACT_APP_ENDPOINT}videos/filter`,{
      type:"anime"
    }).then((res) => {
      console.log(res.data.data);
      setAnimeMovies(res.data.data);
    });
  };
  useEffect(() => {
    fetchActionMoviesData();
    fetchDramasMoviesData();
    fetchAnimeMoviesData();
    fetchComedyMoviesData();
    fetchRomanceMoviesData();
  }, []);
  return (
    <div className="App bg-[#082032]">
      <NavBar allowSearch={true} />
      <ListMovies title={"ACTION MOVIES"} list_movies_data={actionMovies} />
      <ListMovies title={"DRAMAS MOVIES"} list_movies_data={dramasMovies} />
      <ListMovies title={"ANIME MOVIES"} list_movies_data={animeMovies} />
      <ListMovies title={"COMEDY MOVIES"} list_movies_data={comedyMovies} />
      <ListMovies title={"ROMANCE MOVIES"} list_movies_data={romanceMovies} />
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
