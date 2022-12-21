import React from "react";
import {
  Button,
  Input,
  Text,
  NavBar,
  Footer,
  Card,
  ListMovies,
} from "../components";
import ProfileImage from "../assets/images/profile.png";
import JohnWick from "../assets/images/John Wick - Movie Post.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ProfilePage() {
  const navigate = useNavigate();
  const [info, SetInfo] = React.useState({});
  const uid = localStorage.getItem("uid");
  const logOut = () => {
    localStorage.removeItem("uid");
    navigate({
      pathname: "/",
    });
  };

  React.useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_ENDPOINT}userinfo/get`, {
        uid,
      })
      .then((res) => {
        console.log(res.data.data);
        SetInfo(res.data.data);
      });
  }, []);

  return (
    <div className="App bg-[#082032]">
      <NavBar />
      <div className="flex mx-36 py-14 border-b-2">
        <div>
          <img src={ProfileImage} alt="profileImage" className="w-72" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="pl-12 pr-4 text-left flex flex-col">
            <Text
              text={`NAME: ${info.name}`}
              isHeader={false}
              customTheme={"text-white font-button text-2xl"}
            />
            <Text
              text={`Date of birth: ${info.dob}`}
              isHeader={false}
              customTheme={"text-white font-button text-2xl"}
            />
            <Text
              text={`ID: ${info.uid}`}
              isHeader={false}
              customTheme={"text-white font-button text-2xl"}
            />
          </div>
          <div className="flex flex-col pl-12">
            <a className="text-white font-button text-sm">CHANGE PROFILE</a>
            <a className="text-white font-button text-sm">CHANGE PASSWORD</a>
          </div>
        </div>
        {/* <div className="h-[181px] grid">
          <Text
            text={"User Name"}
            isHeader={false}
            customTheme={"text-white font-button text-2xl "}
          />
          <Text
            text={"03/07/2002"}
            isHeader={false}
            customTheme={"text-white font-button text-2xl "}
          />
          <Text
            text={"20120385"}
            isHeader={false}
            customTheme={"text-white font-button text-2xl "}
          />
          <Text
            text={"tranhoangtin3702@gmail.com"}
            isHeader={false}
            customTheme={"text-white font-button text-2xl "}
          />
        </div> */}
      </div>
      <div className="mx-36 py-14">
        <Text
          text={"Your playlists"}
          isHeader={true}
          customTheme={"text-pink-600 font-button text-4xl "}
        />
        <div className="grid items-center justify-between grid-cols-3 my-5">
          {info.listMovie &&
            info.listMovie.map((each, i) => {
              return (
                <Card
                  key={i}
                  imgSrc={each.img}
                  vid={each.vid}
                  className={"max-w-xs mt-8"}
                />
              );
            })}
        </div>
        <Button
          theme="bg-[#CD0574] ml-auto w-24 h-12 rounded-none flex justify-center items-center"
          onClick={logOut}
        >
          <p className="text-2xl font-button text-black">LOG OUT</p>
        </Button>
      </div>
      <Footer />
    </div>
  );
}
export default {
  routeProps: {
    path: "/profile",
    main: ProfilePage,
  },
};
