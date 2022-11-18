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
    <div className='nav-center flex flex-row justify-between bg-slate-900 min-[800px]:text-center max-[1170px]:bg-sky-300 mx-auto my-0 items-center' >
      <div className='nav-header pl-6'>
        <button className='nav-toggle hidden' onClick={toggleLinks}>
            <FontAwesomeIcon icon={faBars} />   

          </button>
        <img src={NetflizLogo} className='logo' alt='logo' width="160rem" />
      </div>
      <div className='links-container' ref={linksContainerRef}>
        <ul className='links' ref={linksRef}>
        </ul>
        
      </div>
      <section className='flex'>
        <Input inputTheme={'p-4'} placeHolder={'Input movie name, category, actor'}>

        </Input>
        <Button className='nav-toggle' onClick={toggleLinks} theme="bg-red-500">
            <FontAwesomeIcon icon={faMagnifyingGlass} />   
        </Button>
    
      </section>
      <Button theme={"bg-gray-200"} >
        <p className="text-5xl font-button text-red-600">LOGIN</p>
      </Button>
      <Button theme={"bg-red-600"}>
        <p className="text-5xl font-button text-gray-200">SIGNUP</p>
      </Button>

    </div>
  );
};



export {NavBar};

