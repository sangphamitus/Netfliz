import React from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Banner } from "../components/Banner";
import { ListMovies } from "../components/ListMovies";

function HomePage() {
    return (
    <div>
        <NavBar />
        <Banner />
        <ListMovies title={"NEW MOVIES"} />
        <ListMovies title={"HOT MOVIES"} />
        <Footer/>
    </div>
    )
}

export default HomePage;