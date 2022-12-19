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
  const navigate= useNavigate();
  const [info,SetInfo]=React.useState({});
  const uid= localStorage.getItem("uid");
  const logOut=()=>{
    localStorage.removeItem("uid");
    navigate({
      pathname: "/",
    
    });
  }
  React.useEffect(()=>{
    axios.post(`${process.env.REACT_APP_ENDPOINT}userinfo/get`,{
      uid
    }).then(res=>  
      {
        console.log(res.data.data)
        SetInfo(res.data.data);
      } 
       
      )

  },[])


  return (
    <div className="App bg-[#082032]">
      <NavBar isLogin={false} />
      <div className="flex mx-36 py-14 border-b-2">
        <div>
          <img src={ProfileImage} alt="profileImage" className="w-72" />
        </div>
        <div className="">
          <div className="pl-12 pr-4  text-left grid">
            <Text
              text={`NAME: ${info.name}`}
              isHeader={false}
              customTheme={"text-white font-button text-2xl "}
            />
            <Text
              text={`Date of birth: ${info.dob}`}
              isHeader={false}
              customTheme={"text-white font-button text-2xl "}
            />
            <Text
              text={`ID: ${info.uid}`}
              isHeader={false}
              customTheme={"text-white font-button text-2xl "}
            />
           
          </div>
          <div className="grid text-right mb-4 pr-4 mt-auto">
            <a className={"text-white font-button text-sm "}>CHANGE PROFILE</a>
            <a className={"text-white font-button text-sm "}>CHANGE PASSWORD</a>
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
      <div className="mx-36 py-14 h-[2000px]">
        <Text
          text={"Your playlists"}
          isHeader={true}
          customTheme={"text-pink-600 font-button text-4xl "}
        />
        <div className="grid items-center justify-between grid-cols-3 grid-rows-4 my-5">
          {info.listMovie&&
            info.listMovie.map((each,i)=>  {
       
            return (
            <Card key={i} imgSrc={each.img} vid={each.vid} className={"max-w-xs mt-8"} />
            )
          })
          }
        
       
        </div>
        <Button theme={"bg-[#CD0574] ml-auto w-20 rounded-md"} onClick={logOut}>
          <p className="text-2xl font-button text-gray-200">LOG OUT</p>
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
