import React, { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Banner } from "../components/Banner";
import { ListMovies } from "../components/ListMovies";
import axios from "axios";


function HomePage() {
    const [newMovies,setNewMovies]= useState([]);
    const [hotMovies,setHotMovies]= useState([]);

    const fetchNewMoviesData= async() =>
    {
        axios.post(`${process.env.REACT_APP_ENDPOINT}videos/new`)
        .then( 
            res => {
                console.log(res.data.data)
                setNewMovies(res.data.data);
            }
        )
    }
    const fetchHotMoviesData= async() =>
    {
        axios.post(`${process.env.REACT_APP_ENDPOINT}videos/hot`)
        .then( 
            res => {
                console.log(res.data.data)
                setHotMovies(res.data.data);
            }
        )
    }
    useEffect(() => {
       fetchNewMoviesData();
       fetchHotMoviesData();
    },[])

    return (
    <div className="App bg-[#082032]">
        <NavBar isLogin={true} allowSearch={true} />
        <Banner />
        <ListMovies title={"NEW MOVIES"} list_movies_data={newMovies} />
        <ListMovies title={"HOT MOVIES"} list_movies_data={hotMovies}/>
        <Footer/>
    </div>
    )
}

export default HomePage;