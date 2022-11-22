import React from "react";
import { Text } from "./Text";

const Card = ({ imgSrc}) => {
    return (
      <div className="bg-center bg-no-repeat overflow-hidden">
        <img src={imgSrc} width="389" height="600" alt="movie-poster"/>
      </div>
    );
  };
  
  export { Card };