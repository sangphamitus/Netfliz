import React from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { ListMovies } from "../components/ListMovies";

function CategoriesPage() {
    return (
        <div className="App bg-[#082032]">
            <NavBar />
            <ListMovies title={"ACTION MOVIES"} />
            <ListMovies title={"DRAMAS MOVIES"} />
            <Footer />
        </div>
    )
}

export default CategoriesPage;