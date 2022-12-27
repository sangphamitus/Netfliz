import React from "react";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Comment = ({ item, ...rest }) => {
  return (
    <div {...rest} className="pl-5 flex flex-row space-x-3 my-5 mr-7">
      <FontAwesomeIcon icon={faCircleUser} inverse size="2x" />
      {item.data.map((each, i) => {
        console.log(each);
        return (
          <div
            key={i}
            className="flex flex-col text-white bg-gray-400 w-fit p-2 rounded-2xl"
          >
            <h6 className="font-semibold">{each.name}</h6>
            <p className="max-h-32 overflow-x-hidden overflow-y-auto">
              {each.content}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export { Comment };
