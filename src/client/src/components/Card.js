import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Card = ({ imgSrc, vid, onClick, canEdit = false, onTrashClick }) => {
  const navigate = useNavigate();

  const cardAccessing = () => {
    navigate(`/info?vid=${vid}`);
  };

  return (
    <div className="card bg-center bg-no-repeat overflow-hidden pr-6">
      {canEdit && (
        <button
          className="trash-icon z-10"
          onClick={(e) => {
            e.preventDefault();
            onTrashClick();
          }}
        >
          <FontAwesomeIcon
            icon={faTrash}
            className="cursor-pointer text-white hover:text-[#CD0574]"
          />
        </button>
      )}

      <img
        className="card-img cursor-pointer object-cover object-center h-fit w-96"
        src={process.env.REACT_APP_ENDPOINT + imgSrc}
        alt="movie-poster"
        onClick={
          onClick
            ? onClick
            : (e) => {
                cardAccessing();
              }
        }
      />
    </div>
  );
};

export { Card };
