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
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return (
    <div className='nav-center flex flex-row bg-[rgb(0,0,0,0.75)]' >
      <div className='nav-header pl-6'>
        <button className='nav-toggle hidden' onClick={toggleLinks}>
            <FontAwesomeIcon icon={faBars} />   

          </button>
        <img src={NetflizLogo} className='logo w-[160px]' alt='logo' />
      </div>
      <div className='links-container' ref={linksContainerRef}>
        <ul className='links' ref={linksRef}>
        </ul>
        
      </div>
      <section className='flex mr-4 ml-auto'>
        <Input inputTheme={'p-4 h-15 ml-12'} placeHolder={'Input movie name, category, actor'} containerTheme={'pt-0 w-[37rem] mb-2'}>

        </Input>
        <Button className='nav-toggle' onClick={toggleLinks} theme="bg-white mt-2 ml-2 w-16 rounded-full">
            <FontAwesomeIcon icon={faMagnifyingGlass}/>   
        </Button>
    
      </section>
      <Button theme={"bg-gray-200 my-2 mr-5"} >
        <p className="text-5xl font-button text-[#CD0574]">LOGIN</p>
      </Button>
      <Button theme={"bg-[#CD0574] my-2 mr-5"}>
        <p className="text-5xl font-button text-gray-200">SIGNUP</p>
      </Button>

    </div>
  );
};



export {NavBar};

