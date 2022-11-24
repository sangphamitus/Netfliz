import React from 'react';
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Text } from "../components/Text";
import { Form } from "../components/Form"
import { NavBar } from '../components/NavBar';
import { Footer} from '../components/Footer';

function LogInPage() {
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

            <Input labelText={"USERNAME"} placeHolder="Email or username"></Input>
            <Input labelText={"PASSWORD"} placeHolder="Password"></Input>
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
            <Button theme={"bg-pink-600 rounded-2xl w-full h-full mt-20"}>
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