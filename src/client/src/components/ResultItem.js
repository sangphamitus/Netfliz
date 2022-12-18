import React from "react";
import { useNavigate } from "react-router-dom";

import { Text } from "./Text";

const ResultItem = ({ movieName, imgSrc }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-row justify-between px-20 py-7"
      onClick={() => console.log("Goi navigate()")}
    >
      <div className="flex flex-col max-w-3xl mr-14 mt-24 font-button text-white  cursor-pointer">
        <Text
          customTheme="text-8xl hover:underline hover:text-[#CD0574] underline-offset-2"
          text={movieName}
        />
        <Text
          customTheme="text-3xl underline underline-offset-2 hover:text-[#CD0574]"
          text="See More"
        />
      </div>
      <div className="cursor-pointer">
        <img src={imgSrc} className="max-h-[400px]" />
      </div>
    </div>
  );
};

export { ResultItem };
