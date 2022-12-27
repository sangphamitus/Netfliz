import React from "react";
import { Text } from "./Text";
import NetflizLogo from "../assets/images/pink2-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#2C394B] py-14 px-14 flex flex-row max-sm:flex-col justify-between">
      <div>
        <ul>
          <li style={{ listStyle: "none" }}>
            <Text
              text="FAQ"
              isHeader={false}
              customTheme="text-[1.5rem] text-white font-button"
              Href="/"
            />
          </li>
          <li>
            <Text
              text="Help center"
              isHeader={false}
              customTheme="text-[1.5rem] text-white font-button"
              Href="/"
            />
          </li>
          <li>
            <Text
              text="Term of use"
              isHeader={false}
              customTheme="text-[1.5rem] text-white font-button"
              Href="/"
            />
          </li>
          <li>
            <Text
              text="Contact us"
              isHeader={false}
              customTheme="text-[1.5rem] text-white font-button"
              Href="/"
            />
          </li>
        </ul>
      </div>
      <div className="">
        <ul>
          <li style={{ listStyle: "none" }} className="mb-2">
            <Text
              text="Follow us"
              isHeader={false}
              customTheme="text-[1.5rem] text-white font-button"
            />
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faFacebook} className="h-8 mr-3" inverse />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faTwitter} className="h-8 mr-3" inverse />
            </a>
            <a href="/">
              <FontAwesomeIcon
                icon={faInstagram}
                className="h-8 mr-3"
                inverse
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="my-auto">
        <Link to="/">
          <img src={NetflizLogo} className="logo" alt="logo" width="160rem" />
        </Link>
      </div>
    </div>
  );
};

export { Footer };
