import React, { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import axios from 'axios';

function AdminDeleteMovie() {
    

    return(
        <div className="App bg-[#082032]">
            <NavBar isLogin={true} allowSearch={true} />

        </div>
    )
}