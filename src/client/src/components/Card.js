import React from "react";
import { Text } from "./Text";

const Card = ({ imgSrc}) => {
    return (
      <div className="bg-center bg-no-repeat overflow-hidden pr-6">
          <img className="object-cover object-center h-fit w-96 " src={imgSrc} alt="movie-poster"/>
      </div>
    );
  };
  
  export { Card };