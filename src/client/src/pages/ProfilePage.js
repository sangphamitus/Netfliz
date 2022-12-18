import React, { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Text } from "../components/Text";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";
import { ListMovies } from "../components/ListMovies";
import ProfileImage from "../assets/images/profile.png";
import JohnWick from "../assets/images/John Wick - Movie Post.jpg";

import axios from "axios";

function ProfilePage() {
  return (
    <div className="App bg-[#082032]">
      <NavBar isLogin={false} />
      <div className="flex mx-36 py-14 border-b-2">
        <div>
          <img src={ProfileImage} alt="profileImage" className="w-72" />
        </div>
        <div className="grid">
          <div className="pl-12 pr-4 w-[181px] text-right grid">
            <Text
              text={"NAME:"}
              isHeader={false}
              customTheme={"text-white font-button text-2xl "}
            />
            <Text
              text={"Date of birth:"}
              isHeader={false}
              customTheme={"text-white font-button text-2xl "}
            />
            <Text
              text={"ID:"}
              isHeader={false}
              customTheme={"text-white font-button text-2xl "}
            />
            <Text
              text={"Email:"}
              isHeader={false}
              customTheme={"text-white font-button text-2xl "}
            />
          </div>
          <div className="grid text-right mb-4 pr-4 mt-auto">
            <a className={"text-white font-button text-sm "}>CHANGE PROFILE</a>
            <a className={"text-white font-button text-sm "}>CHANGE PASSWORD</a>
          </div>
        </div>
        <div className="h-[181px] grid">
          <Text
            text={"User Name"}
            isHeader={false}
            customTheme={"text-white font-button text-2xl "}
          />
          <Text
            text={"03/07/2002"}
            isHeader={false}
            customTheme={"text-white font-button text-2xl "}
          />
          <Text
            text={"20120385"}
            isHeader={false}
            customTheme={"text-white font-button text-2xl "}
          />
          <Text
            text={"tranhoangtin3702@gmail.com"}
            isHeader={false}
            customTheme={"text-white font-button text-2xl "}
          />
        </div>
      </div>
      <div className="mx-36 py-14 h-[2000px]">
        <Text
          text={"Your playlists"}
          isHeader={true}
          customTheme={"text-pink-600 font-button text-4xl "}
        />
        <div className="grid items-center justify-between grid-cols-3 grid-rows-4 my-5">
          <img src={JohnWick} className={"max-w-xs mt-8"} />
          <img src={JohnWick} className={"max-w-xs mt-8"} />
          <img src={JohnWick} className={"max-w-xs mt-8"} />
          <img src={JohnWick} className={"max-w-xs mt-8"} />
        </div>
        <Button theme={"bg-[#CD0574] ml-auto w-20 rounded-md"}>
          <p className="text-2xl font-button text-gray-200">LOG OUT</p>
        </Button>
      </div>
      <Footer />
    </div>
  );
}
export default {
  routeProps: {
    path: "/profile",
    main: ProfilePage,
  },
};
