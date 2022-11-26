import React, { useState } from 'react';
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Text } from "../components/Text";
import { Form } from "../components/Form"
import { NavBar } from '../components/NavBar';
import { Footer} from '../components/Footer';
import axios from 'axios'


function LogInPage() {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    const submitClickHandler=async (event)=>{
      event.preventDefault();
      
      console.log(`${username} - ${password}`)
      console.log("clicked");
      axios.post(`${process.env.REACT_APP_ENDPOINT}users/login`,{
        username,
        password,
        remember:true,
      })
      .then( 
          res => {
              console.log(res.data.data)
       
          }
      )
    }
    const usernameChangeHandler=(event)=> {
      setUsername(event.target.value);
      
    }
    const passwordChangeHandler=(event)=> {
      setPassword(event.target.value);
      
    }
    return(
      <div className="bg-scroll bg-login-background">
        <NavBar/>
        <div className='flex justify-center py-20'>
        <Form formClass={'w-full'}>
        <Text
              customTheme="text-[3.5rem] text-pink-600 font-button"
              isHeader={true}
              text={"SIGN IN"}
            />

            <Input id="username" labelText={"USERNAME"} placeHolder="Email or username"
              onChange={usernameChangeHandler}></Input>
            <Input id="password" labelText={"PASSWORD"} placeHolder="Password" type="password"
              onChange={passwordChangeHandler}></Input>
            <div className="grid grid-flow-col pt-2.5">
              <Text
                className=""
                customTheme="text-xl text-pink-600 font-medium"
                isHeader={false}
                text="Forgot password"
              />
              <Text
                className=""
                customTheme="text-xl text-pink-600  text-end font-medium"
                isHeader={false}
                text="Don't have account ?"
                 
              />
            </div>
            <Button theme={"bg-pink-600 rounded-2xl w-full h-full mt-20"}
            onClick={submitClickHandler}
             >
              <Text
                customTheme="text-[3.5rem] leading-none text-gray-200 font-button"
                isHeader={false}
                text="SIGN IN"
              />
            </Button>
        </Form>
        
        </div>
        <Footer/> 
      </div>
    )
  }
  
export default LogInPage;