import React from "react";
import { Button } from "./Button";

import { Input } from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import NetflizLogo from "../assets/images/pink2-logo.png";
import { useNavigate } from "react-router-dom";

const NavBar = ({  allowSearch = true }) => {
const [isLogin,setIsLogin]= React.useState(false);
  const navigate = useNavigate();
  const [showLinks, setShowLinks] = React.useState(false);
  const linksContainerRef = React.useRef(null);
  const linksRef = React.useRef(null);
  const [textInput, setTextInput] = React.useState("");

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const submit = (e) => {

    
    navigate({
      pathname: "/videos/search",
      search: `?name=${textInput}`,
    });

  };

  React.useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
    
  }, [showLinks]);

  React.useEffect(()=>{
    setIsLogin(localStorage.getItem("uid")!=null);
  },[localStorage]);

  return (
    <div className="nav-center flex flex-row bg-black bg-opacity-75">
      <div className="nav-header px-6">
        <button className="nav-toggle hidden" onClick={toggleLinks}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <img
          src={NetflizLogo}
          className="logo w-[140px] max-w-none cursor-pointer"
          alt="logo"
          onClick={() => navigate({ pathname: "/" })}
        />
      </div>
      <div className="links-container" ref={linksContainerRef}>
        <ul className="links" ref={linksRef}></ul>
      </div>
      <div className="nav-header px-6">
        <Button
          theme={"bg-opacity-100 mb-2 mt-3 text-2xl font-button text-[#CD0574]"}
          onClick={() => navigate({ pathname: "/categories" })}
        >
          Category
        </Button>
      </div>

      {allowSearch === true && (
        <form
          onSubmit={submit}
          // method="post"
          // action="/videos/search"
          className="flex mr-10 max-w-screen-md w-full ml-auto"
        >
          <Input
            inputTheme={"p-4 h-10 max-2w-xl w-auto bg-black bg-opacity-25"}
            placeHolder={"Input movie name or category"}
            containerTheme={"pt-2 mb-2 w-full bg-opacity-25"}
            textColor={"white"}
            name="name"
            onChange={(e) => setTextInput(e.target.value)}
          ></Input>
          <Button
            className="nav-toggle"
            type="submit"
            onClick={toggleLinks}
            theme="mt-2 w-14 rounded-full ml-0"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} inverse size="2x" />
          </Button>
        </form>
      )}
      <div>
        {isLogin === false ? (
          <div className="mr-0 ml-auto">
            <Button
              theme={
                "bg-gray-200 p-1 my-2 mr-5 w-20 rounded-md text-2xl font-button text-[#CD0574]"
              }
              onClick={() => navigate({ pathname: "/login" })}
            >
              LOGIN
            </Button>
            <Button
              theme={
                "bg-[#CD0574] p-1 my-2 mr-5 w-20 rounded-md text-2xl font-button text-gray-200"
              }
              onClick={() => navigate({ pathname: "/signup" })}
            >
              SIGNUP
            </Button>
          </div>
        ) : isLogin === true ? (
          <div className="mr-3 ml-auto mt-2 p-1 w-10 rounded-full">
            <button className="nav-toggle" onClick={toggleLinks}>
              <FontAwesomeIcon icon={faCircleUser} inverse size="2x" />
            </button>
          </div>
        ) : (
          <div></div>
        )}

      </div>
    </div>
  );
};
export { NavBar };
