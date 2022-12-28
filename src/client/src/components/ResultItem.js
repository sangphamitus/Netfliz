import React from "react";
import { useNavigate } from "react-router-dom";

import { Text } from "./Text";

const ResultItem = ({ vid, movieName, imgSrc }) => {
  const navigate = useNavigate();

  return (
    <div className="flex sm:flex-row max-sm:h-fit flex-col justify-between sm:px-20 sm:py-7">
      <div
        className="flex flex-col max-w-3xl mr-14 sm:mt-24 mt-3 font-button text-white  cursor-pointer"
        onClick={() => navigate(`/info?vid=${vid}`)}
      >
        <Text
          customTheme="hover:underline hover:text-[#CD0574] underline-offset-2"
          text={movieName}
          style={{
            fontSize: "calc(2.5rem + 1.5vw)",
          }}
        />
        <Text
          customTheme="underline underline-offset-2 hover:text-[#CD0574]"
          text="See More"
          style={{
            fontSize: "calc(1rem + 1.5vw)",
          }}
        />
      </div>
      <div
        className="cursor-pointer"
        onClick={() => navigate(`/info?vid=${vid}`)}
      >
        <img
          src={process.env.REACT_APP_ENDPOINT + imgSrc}
          className="max-h-[400px]"
        />
      </div>
    </div>
  );
};

export { ResultItem };
