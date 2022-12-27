import React, { useState } from "react";
import axios from "axios";
import { Button, Input, Text, Form, NavBar, Footer } from "../components";
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

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

            toast.success("Register account succeed",{autoClose:2000});
            setTimeout(()=>{window.location.href = "/LogIn";},3000)
          }
          else{
            toast.error("Opps!!"+res.data.message,{autoClose:2000});

          }
        });
    } else {
      toast.warning("Please check password again",{autoClose:2000});
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
    <div className="bg-local bg-login-background">
      <NavBar allowSearch={false} />
      <div className="flex justify-center py-32">
        <Form
          formClass="w-full md:mx-36 xl:mx-80"
          onSubmit={submitClickHandler}
        >
          <Text
            customTheme="text-[3.5rem] text-pink-600 font-button"
            isHeader={true}
            text="SIGNUP"
          />
          <Input
            labelText="EMAIL"
            inputTheme="h-12"
            onChange={emailChangeHandler}
          />
          <Input
            labelText="USERNAME"
            inputTheme="h-12"
            containerTheme="pt-8"
            onChange={usernameChangeHandler}
          />
          <Input
            labelText="PASSWORD"
            inputTheme="h-12"
            containerTheme="pt-8"
            onChange={passwordChangeHandler}
            type="password"
          />
          <Input
            labelText="CONFIRM PASSWORD"
            inputTheme="h-12"
            containerTheme="pt-8"
            onChange={repasswordChangeHandler}
            type="password"
          />
          <Button
            type="submit"
            theme="p-2 bg-pink-600 rounded-2xl w-full mt-20"
            onClick={submitClickHandler}
          >
            <Text
              customTheme="text-[2.5rem] leading-none text-gray-200 font-button"
              isHeader={false}
              text="SIGNUP"
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
    path: "/signup",
    main: SignUpPage,
  },
};
