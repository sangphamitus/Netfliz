import React from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import { Text } from "../components/Text";

function AdminPage() {
    return (
        <div className="App bg-[#082032]">
        <NavBar isLogin={true} allowSearch={true}/>
        <div className=" w-full text-center">
            <Button theme={"inline-block bg-pink-600 w-[150px] h-[150px] m-[50px]"}>
                <Text 
                    text={"ADD MOVIE"}
                    customTheme={"text-[30px] text-white font-button"}
                />
            </Button>
            <Button theme={"inline-block bg-pink-600 w-[150px] h-[150px] m-[50px]"}>
                <Text 
                    text={"DELETE MOVIE"}
                    customTheme={"text-[30px] text-white font-button"}
                />
            </Button>
            <Button theme={"inline-block bg-pink-600 w-[150px] h-[150px] m-[50px]"}>
                <Text 
                    text={"CHANGE INFO"}
                    customTheme={"text-[30px] text-white font-button"}
                />
            </Button>
            <Button theme={"inline-block bg-pink-600 w-[150px] h-[150px] m-[50px]"}>
                <Text 
                    text={"ADD ADMIN"}
                    customTheme={"text-[30px] text-white font-button"}
                />
            </Button>
        </div>
        <Footer/>
        </div>
    )
}

export default AdminPage;