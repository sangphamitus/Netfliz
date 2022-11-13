import React from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Text } from "./Text";

export { Form };

const Form = ({ formClass, isLogin }) => {
  return (
    <form className={`bg-black opacity-75 w-96 h-auto ${formClass}`}>
      {isLogin ? (
        <>
          <Text
            customTheme="text-5xl text-pink-600"
            isHeader={true}
            text={"LOGIN"}
          />

          <Input labelText={"USERNAME"}></Input>
          <Input labelText={"PASSWORD"}></Input>
          <div>
            <Text
              customTheme="text-xl text-pink-600"
              isHeader={false}
              text="Forgot password"
            />
            <p>Don't have account ?</p>
          </div>
          <Button theme={"bg-pink-500 opacity-100"}>
            <Text
              customTheme="text-4xl text-gray-200"
              isHeader={false}
              text="LOGIN"
            />
          </Button>
        </>
      ) : (
        <>
          <Text
            customTheme="text-5xl text-pink-600"
            isHeader={true}
            text={"SIGNUP"}
          />
          <Input labelText={"EMAIL"}></Input>
          <Input labelText={"USERNAME"}></Input>
          <Input labelText={"PASSWORD"}></Input>
          <Input labelText={"CONFIRM PASSWORD"}></Input>
          <Button theme={"bg-pink-500 opacity-100"}>
            <Text
              customTheme="text-4xl text-gray-200"
              isHeader={false}
              text="SIGNUP"
            />
          </Button>
        </>
      )}
    </form>
  );
};
