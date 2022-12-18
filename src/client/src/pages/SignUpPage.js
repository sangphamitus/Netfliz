import React, { useState } from "react";
import axios from "axios";
import { Button, Input, Text, Form, NavBar, Footer } from "../components";

function SignUpPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [email, setEmail] = useState("");

  const submitClickHandler = async (event) => {
    event.preventDefault();

    console.log(`${username} - ${password}`);
    console.log("clicked");
    if (repassword === password) {
      axios
        .post(`${process.env.REACT_APP_ENDPOINT}users/register`, {
          username,
          password,
          email,
          permission: "false",
        })
        .then((res) => {
          console.log(res.data.message);
          if (res.data.message === "success") {
            window.location.href = "/LogIn";
          }
        });
    } else {
      console.log("wrong repassword");
    }
  };
  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const repasswordChangeHandler = (event) => {
    setRepassword(event.target.value);
  };

  return (
    <div className="bg-local ... bg-login-background">
      <NavBar isLogin={"none"} allowSearch={false} />
      <div className="flex justify-center py-20">
        <Form formClass={"w-full"}>
          <Text
            customTheme="text-[3.5rem] text-pink-600 font-button"
            isHeader={true}
            text={"SIGNUP"}
          />
          <Input labelText={"EMAIL"} onChange={emailChangeHandler}></Input>
          <Input
            labelText={"USERNAME"}
            onChange={usernameChangeHandler}
          ></Input>
          <Input
            labelText={"PASSWORD"}
            onChange={passwordChangeHandler}
            type="password"
          ></Input>
          <Input
            labelText={"CONFIRM PASSWORD"}
            onChange={repasswordChangeHandler}
            type="password"
          ></Input>
          <Button
            theme={"h-16 p-3 bg-pink-600 rounded-2xl w-full h-auto mt-20"}
            onClick={submitClickHandler}
          >
            <Text
              customTheme="text-[3.5rem] leading-none text-gray-200 font-button"
              isHeader={false}
              text="SIGNUP"
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
    path: "/signup",
    main: SignUpPage,
  },
};
