import React, { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Text } from "../components/Text";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { ListMovies } from "../components/ListMovies";

import {useLocation,useNavigate } from "react-router-dom"
import axios from 'axios';


function WatchMoviePage() {   
     const [movie,setMovie]=React.useState({});
     const search = useLocation().search;
    React.useEffect( ()=>
    {   
      
        const vid = new URLSearchParams(search).get('vid');
     
        axios.post(`${process.env.REACT_APP_ENDPOINT}videos/get`,{
            vid:vid
          }) .then( 
            res => {
                console.log(res.data.data)
                setMovie(res.data.data);
            }
        )
    },[])
  
  


  return (
    <div className="App bg-[#082032]">
      <NavBar isLogin={false} />
      <div>
      <iframe className='w-full h-[35rem] mb-14' src={movie.link} title={movie.name}
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
            </div>
      <ListMovies title={"EPISODES"} />

      <div className="bg-[#E5E5E5] w-auto min-h-[18rem] h-auto my-10 mx-5">
        <Text
          text={"Comments"}
          customTheme={"text-[2rem] px-5"}
          isHeader={true}
        />
        <div className="flex px-5 my-5">
          <Input containerTheme={"min-w-[38rem] pt-0"} />
          <Button
            theme={"bg-pink-600 rounded-2xl w-auto h-auto px-3 mx-3 px-4"}
          >
            <Text
              customTheme="text-[2rem] leading-none text-gray-200 font-button"
              isHeader={false}
              text="Comment"
            />
          </Button>
        </div>

        <div>{/* show comments */}</div>
      </div>

      <ListMovies title={"New movies"} />

      <div className="h-[57rem]" />

      <Footer />
    </div>
  );
}

export default {
  routeProps: {
    path: "/watch",
    main: WatchMoviePage,
  },
};
