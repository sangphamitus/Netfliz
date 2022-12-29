import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Input, Text, Form, NavBar, Footer } from "../components";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        if (res.data.message === "success") {
          localStorage.setItem("uid", res.data.data);
          localStorage.setItem("per", res.data.permission);
          console.log(res.data.data);
          if (res.data.permission) {
            window.location.href = "/admin";
          } else window.location.href = "/";
        } else {
          toast.warning(res.data.message, { autoClose: 3000 });
        }
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
      <NavBar allowSearch={false} />
      <div className="flex justify-center py-40">
        <Form
          formClass="w-full md:mx-36 xl:mx-80"
          onSubmit={submitClickHandler}
        >
          <Text
            customTheme="text-[3.5rem] text-pink-600 font-button"
            isHeader={true}
            text="SIGN IN"
          />
          <Input
            id="username"
            inputTheme="h-12"
            labelText="USERNAME"
            placeholder="Email or username"
            onChange={usernameChangeHandler}
          />
          <Input
            id="password"
            inputTheme="h-12"
            labelText="PASSWORD"
            placeholder="Password"
            containerTheme="pt-8"
            type="password"
            onChange={passwordChangeHandler}
          ></Input>
          <div className="flex flex-row justify-between pt-2.5">
            <Text
              customTheme="text-pink-600 font-medium cursor-pointer"
              isHeader={false}
              text="Forgot password"
              style={{
                fontSize: "calc(0.5rem + 1vw)",
              }}
            />
            <Text
              customTheme="text-pink-600 text-end font-medium cursor-pointer"
              isHeader={false}
              text="Don't have account ?"
              style={{
                fontSize: "calc(0.5rem + 1vw)",
              }}
              onClick={() => navigate({ pathname: "/signup" })}
            />
          </div>
          <Button
            type="submit"
            theme="p-2 bg-pink-600 rounded-2xl w-full mt-20"
          >
            <Text
              customTheme="text-[2.5rem] leading-none text-gray-200 font-button"
              isHeader={false}
              text="SIGN IN"
            />
          </Button>
        </Form>
      </div>
      <ToastContainer />
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
