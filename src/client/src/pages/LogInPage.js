import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Input, Text, Form, NavBar, Footer } from "../components";

import axios from "axios";

function LogInPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitClickHandler = async (event) => {
    event.preventDefault();

    console.log(`${username} - ${password}`);
    console.log("clicked");
    axios
      .post(`${process.env.REACT_APP_ENDPOINT}users/login`, {
        username,
        password,
        remember: true,
      })

      .then((res) => {
        localStorage.setItem("uid", res.data.data);
        console.log(res.data.data);
        window.location.href = "/";
      });
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div className="bg-scroll bg-login-background">
      <div className="fixed top-0 overflow-hidden w-full z-10">
        <NavBar allowSearch={false} />
      </div>
      <div className="flex justify-center py-20">
        <Form formClass={"w-[640px]"} onSubmit={submitClickHandler}>
          <Text
            customTheme="text-[3.5rem] text-pink-600 font-button"
            isHeader={true}
            text={"SIGN IN"}
          />
          <Input
            id="username"
            labelText={"USERNAME"}
            placeHolder="Email or username"
            onChange={usernameChangeHandler}
          ></Input>
          <Input
            id="password"
            labelText={"PASSWORD"}
            placeHolder="Password"
            type="password"
            onChange={passwordChangeHandler}
          ></Input>
          <div className="grid grid-flow-col pt-2.5">
            <Text
              className=""
              customTheme="text-xl text-pink-600 font-medium cursor-pointer"
              isHeader={false}
              text="Forgot password"
            />
            <Text
              className=""
              customTheme="text-xl text-pink-600 text-end font-medium cursor-pointer"
              isHeader={false}
              text="Don't have account ?"
              onClick={() => navigate({ pathname: "/signup" })}
            />
          </div>
          <Button
            type="submit"
            theme={"h-16 p-3 bg-pink-600 rounded-2xl w-full h-full mt-20"}
          >
            <Text
              customTheme="text-[3.5rem] leading-none text-gray-200 font-button"
              isHeader={false}
              text="SIGN IN"
            />
          </Button>
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default {
  routeProps: {
    path: "/login",
    main: LogInPage,
  },
};
