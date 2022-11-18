import React from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Text } from "../components/Text";
import { Form } from "../components/Form"

const Signup = () => {
    return(
        <Form>
             <Text
              customTheme="text-[3.5rem] text-pink-600 font-button"
              isHeader={true}
              text={"SIGNUP"}
            />
            <Input labelText={"EMAIL"}></Input>
            <Input labelText={"USERNAME"}></Input>
            <Input labelText={"PASSWORD"}></Input>
            <Input labelText={"CONFIRM PASSWORD"}></Input>
            <Button theme={"bg-pink-600 rounded-2xl w-full h-full mt-20"}>
              <Text
                customTheme="text-[3.5rem] leading-none text-gray-200 font-button"
                isHeader={false}
                text="SIGNUP"
              />
            </Button>
        </Form>
        
    )
}

export {Signup};