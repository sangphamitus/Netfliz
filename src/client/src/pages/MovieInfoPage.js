import React from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Text } from "../components/Text";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Rate } from "../components/Rating";
import {useLocation,useNavigate } from "react-router-dom"
import axios from "axios";
function MovieInfoPage() {

    const [movie,setMovie]=React.useState({});
    const search = useLocation().search;
    const navigate=useNavigate();
    const watchingAccessing= ()=> {
        navigate(`/WatchMoviePage?vid=${ new URLSearchParams(search).get('vid')}`)
        
    }
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
        <div className="App bg-[#082032]"  onClick={(e)=>{watchingAccessing()}}>
            <NavBar />
            <div className=" relative">
                <img className="w-full h-[620px] relative z-0" src={movie.image} title={movie.name} 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></img>
                <div className=" absolute top-[215px] left-[50px] z-[1]">
                    <Text text={movie.name} isHeader={true} customTheme={"text-6xl text-white"}/>
                    <Rate rateinput={movie.ratting}/>
                    <p className="max-w-[250px] text-white font-normal">
                   {movie.review}
                    </p> 

                </div>
            </div>


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

      <Footer />
    </div>
  );
}

export default {
  routeProps: {
    path: "/info",
    main: MovieInfoPage,
  },
};
