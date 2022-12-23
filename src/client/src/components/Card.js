import React from "react";
import { Text } from "./Text";
import { useNavigate } from "react-router-dom";

const Card = ({ imgSrc,vid,onClick}) => {

    const navigate=useNavigate();
    const cardAccessing= ()=> {
      navigate(`/info?vid=${vid}`)
  
    }
    return (
      <div className="bg-center bg-no-repeat overflow-hidden pr-6" onClick={onClick?onClick:(e)=>{cardAccessing()}}>
          <img className="object-cover object-center h-fit w-96 " src={imgSrc} alt="movie-poster"/>
      </div>
    );
  };
  
  export { Card };