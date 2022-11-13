import React from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Text } from "./Text";

const Form = ({ formClass, isLogin }) => {
  return (
    <form
      className={`bg-black bg-opacity-75 max-w-screen-sm h-auto ${formClass}`}
    >
      <div className="pt-12 px-14 pb-20">
        {isLogin ? (
          <>
            <Text
              customTheme="text-[3.5rem] text-pink-600 font-button"
              isHeader={true}
              text={"SIGN IN"}
            />

            <Input labelText={"USERNAME"}></Input>
            <Input labelText={"PASSWORD"}></Input>
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
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </form>
  );
};

export { Form };
