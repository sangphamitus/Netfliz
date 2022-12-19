import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import { Button, Input, Text, NavBar, Footer, ListMovies } from "../components";

function WatchMoviePage() {
  const [movie, setMovie] = React.useState({});

  const [newMovies, setNewMovies] = useState([]);
  const [episode, setEpisode] = useState([]);
  const search = useLocation().search;
  const [cmt, setCmt]=React.useState([]);
  const [inputCmt,setInputCmt]=React.useState("");
  const vid = new URLSearchParams(search).get("vid");
  const fetchNewMoviesData = async () => {
    axios.post(`${process.env.REACT_APP_ENDPOINT}videos/new`).then((res) => {
      console.log(res.data.data);
      setNewMovies(res.data.data);
    });
  };

  React.useEffect(() => {
  
    fetchNewMoviesData();
    axios
      .post(`${process.env.REACT_APP_ENDPOINT}videos/get`, {
        vid: vid,
      })
      .then((res) => {
        console.log(res.data.data);
        setMovie(res.data.data);
      });
  }, []);

  React.useEffect(() => {
  
    if(movie.haveEp==null) return;

    axios   .post(`${process.env.REACT_APP_ENDPOINT}videos/getEp`, {
        eid: movie.haveEp,
      })
      .then((res) => {
        console.log(res.data.data);
        setEpisode(res.data.data);
      });
  }, [movie]);
  React.useEffect(()=>{
    axios.post(`${process.env.REACT_APP_ENDPOINT}comments/getpost`,{
      vid:vid
    }) .then( 
      res => {
          console.log(res.data.data)
          setCmt(res.data.data);
      }
  )
  },[]);

  const postComment=async()=>
  {
      if(inputCmt!=="")
      {
        axios.post(`${process.env.REACT_APP_ENDPOINT}comments/post`,{
          
            vid:vid,
          
            username:"Test",
            content:inputCmt
            
          
        }) .then( 
          res => {
              console.log(res.data.data)
              setCmt(res.data.data);

              setInputCmt("");

          }
      )
      }      
  }
  return (
    <div className="App bg-[#082032]">
      <NavBar isLogin={false} />
      <div>
        <iframe
          className="w-full h-[35rem] mb-14"
          src={movie.link}
          title={movie.name}
          frameborder="0"
        
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      {episode.length&& <ListMovies title={"EPISODES"} list_movies_data={episode} />}
      

      <div className="bg-[#E5E5E5] w-auto min-h-[18rem] h-auto my-10 mx-5">
        <Text
          text={"Comments"}
          customTheme={"text-[2rem] px-5"}
          isHeader={true}
        />
            {
          localStorage.getItem("uid")!==null&&localStorage.getItem("uid")!=="null" &&
          (
          <div className="flex px-5 my-5">
          <Input containerTheme={"min-w-[38rem] pt-0"} onChange={(e)=>{setInputCmt(e.target.value)}}/>
          <Button
            theme={"bg-pink-600 rounded-2xl w-auto h-auto px-3 mx-3 px-4"}
            onClick={postComment}
          >
            <Text
              customTheme="text-[2rem] leading-none text-gray-200 font-button"
              isHeader={false}
              text="Comment"
            />
          </Button>
        </div>)

        }

       
<div>{cmt.map(item=>
  
  <div key={item.key}>
    {item.data.map ((each,i)=>
  {
   
    return(
   
            <div  >
                  <p>{new Date(each.timeStamp).toUTCString()}</p>
                    <b>{each.username }<i>:{each.content}</i></b>
                    <hr/>
                </div>

  )
})}
  </div>
)}</div>
      </div>

      <ListMovies title={"NEW MOVIES"} list_movies_data={newMovies} />

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
