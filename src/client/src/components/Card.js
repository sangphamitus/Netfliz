import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Card = ({ imgSrc, vid, onClick, canEdit=false, onTrashClick}) => {
  const navigate = useNavigate();
  
  const cardAccessing = () => {
    navigate(`/info?vid=${vid}`);
  };
  
  return (
    <div
      className="card bg-center bg-no-repeat overflow-hidden pr-6"
      onClick={onClick ? onClick : (e) => {
        cardAccessing()
      }}
    >
      {canEdit&&    <button className="trash-icon"
      onClick={onTrashClick}>
        <FontAwesomeIcon
          icon={faTrash}
        
          className="cursor-pointer text-white hover:text-[#CD0574]"
        />
      </button>}
  

      <img
        className="card-img object-cover object-center h-fit w-96"
        src={imgSrc}
        alt="movie-poster"
      />
    </div>
  );
};

export { Card };
