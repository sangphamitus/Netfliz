import React, { useState, useRef, useEffect } from 'react';
import { Button } from "./Button";
import { Input } from './Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars} from '@fortawesome/free-solid-svg-icons'
import NetflizLogo from '../assets/images/pink2-logo.png'

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <div className="nav-center flex flex-row bg-black bg-opacity-75">
      <div className="nav-header px-6">
        <button className="nav-toggle hidden" onClick={toggleLinks}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <a href="/">
          <img
            src={NetflizLogo}
            className="logo w-[160px] max-w-none"
            alt="logo"
          />
        </a>
      </div>
      <div className="links-container" ref={linksContainerRef}>
        <ul className="links" ref={linksRef}></ul>
      </div>
      <div className="flex mr-0 max-w-screen-md w-full ml-auto">
        <Input
          inputTheme={"p-4 h-15 max-2w-xl w-auto bg-black bg-opacity-25"} 
          placeHolder={"Input movie name, category, actor"}
          containerTheme={"pt-2 mb-2 w-full bg-opacity-25"}
        ></Input>
        <Button
          className="nav-toggle"
          onClick={toggleLinks}
          theme="mt-2 w-14 rounded-full ml-0"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} inverse size="2x" />
        </Button>
      </div>
      <div className='mr-0 ml-auto'>
        <Button theme={"bg-gray-200 my-2 mr-5 w-28 rounded-full"}>
          <p className="text-4xl font-button text-[#CD0574]">LOGIN</p>
        </Button>
        <Button theme={"bg-[#CD0574] my-2 mr-5 w-28 rounded-full"}>
          <p className="text-4xl font-button text-gray-200">SIGNUP</p>
        </Button>
      </div>
    </div>
  );
};
export { NavBar };