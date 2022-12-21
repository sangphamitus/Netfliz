import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  Text,
  NavBar,
  Footer,
  Card,
  ListMovies,
} from "../components";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminDeleteMovie() {
  const navigate = useNavigate();
  const [textInput, setTextInput] = React.useState("");
  const [showLinks, setShowLinks] = React.useState(false);
  const submit = (e) => {
    navigate({
      //pathname: "/videos/search",
      search: `?name=${textInput}`,
    });
  };

  return (
    <div className="App bg-[#082032]">
      <NavBar is_login={true} allowSearch={false} />
      <div className="mx-36 py-14 h-auto">
        <Text
          text={"ALL MOVIE"}
          isHeader={true}
          customTheme={"text-pink-600 font-button text-4xl "}
        />
        <form
          onSubmit={submit}
          // method="post"
          // action="/videos/search"
          className="flex mr-10 max-w-screen-md w-full ml-auto"
        >
          <Input
            inputTheme={"p-4 h-10 max-2w-xl w-auto bg-black bg-opacity-25"}
            placeHolder={"Input movie name or category"}
            containerTheme={"pt-2 mb-2 w-full bg-opacity-25"}
            textColor={"white"}
            name="name"
            onChange={(e) => setTextInput(e.target.value)}
          ></Input>
          <Button
            className="nav-toggle"
            type="submit"
            onClick={submit}
            theme="w-14 rounded-full ml-0"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} inverse size="2x" />
          </Button>
        </form>
        <div className="grid items-center justify-between grid-cols-3 grid-rows-4 my-5"></div>
      </div>
      <div>{/*chỗ này để danh sách tất cả phim */}</div>
      <div>{/* chố này để cái chuyển trang*/}</div>
      <Footer />
    </div>
  );
}

export default {
  routeProps: {
    path: "/adminDelete",
    main: AdminDeleteMovie,
  },
};