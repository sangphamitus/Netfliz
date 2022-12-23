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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Form } from "../components/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ChangeMovieInfoPage() {
    const navigate = useNavigate();
    const [textInput, setTextInput] = React.useState("");
    const [movies, setMovies] = React.useState([]);
    const [isChosen,setIsChosen]= React.useState(null);
    const [ tagsChange,setTagsChange]=React.useState([null,null,null]);
    const [allEpisode,setAllEpisode]=React.useState([]);
    const [episodeChosen,setEpisodeChosen]= React.useState(null);
    const [createEp,setCreateEp]=React.useState(false);
    const [collectionName,setCollectionName]=React.useState("");
    


    const getAllEpisode=async()=>{
      axios.post(`${process.env.REACT_APP_ENDPOINT}videos/getAllEp`)
        .then((res) => {
          console.log(res.data.data);
          setAllEpisode(res.data.data);
        });
    }
    const createCollection=async(e)=> {
      e.preventDefault();

      if(collectionName.length===0) return;
      axios.post(`${process.env.REACT_APP_ENDPOINT}videos/createEp`,
      {
        name:collectionName
      })
      .then((res) => {
        console.log(res.data.data);
          getAllEpisode();
          setCreateEp(false);
      });
    }
    const saveSubmit=async(e)=>{
      let typeString="";
      tagsChange.forEach(each=>
        {
          if(each!=="null")
          {
              if (typeString.length>0)
              {
                typeString+=","
              }
              typeString+=each
          }

        })
      axios.post(`${process.env.REACT_APP_ENDPOINT}videos/changeVideo`,
      {
        vid:isChosen.vid,
        link:isChosen.link,
        ratting:isChosen.ratting,
        name:isChosen.name,
        image:isChosen.image,
        haveEp:episodeChosen,
        review:isChosen.review,
        type:typeString
      })
      .then((res) => {
        console.log(res.data.data);
  
      });
      //vid,link,name,image,ratting,haveEp,review,type
    }
    const submit = async(e) => {

        if (textInput.length>0)
        {
        axios
        .post(`${process.env.REACT_APP_ENDPOINT}videos/search`, {
          name: textInput,
        })
        .then((res) => {
          console.log(res.data.data);
          setMovies(res.data.data);
        });
      }
      else{
        axios.post(`${process.env.REACT_APP_ENDPOINT}videos/getall`)
        .then((res) => {
          console.log(res.data.data);
          setMovies(res.data.data);
        });
      }
      setTextInput("");
      };
      React.useEffect(()=> {
        if(localStorage.getItem("per")!=="true")
        {
            window.location.href="/"
        }
        else{
          try
          {
            let value = decodeURI(window.location.search).split("?")[1].split("=");
            axios
          .post(`${process.env.REACT_APP_ENDPOINT}videos/search`, {
            name: value[1].replace("+", " "),
          })
          .then((res) => {
            console.log(res.data.data);
            setMovies(res.data.data);
          });
          }
          catch(err)
          {
            axios.post(`${process.env.REACT_APP_ENDPOINT}videos/getall`)
            .then((res) => {
              console.log(res.data.data);
              setMovies(res.data.data);
            });
      
          }  
          getAllEpisode();
        }
        
    },[])
    return (
        <div className="App bg-[#082032]">
            <NavBar isLogin={true} allowSearch={true}/>
            <Text 
                text={"CHANGE MOVIE INFO"}
                isHeader={true}
                customTheme="text-pink-600 text-[30px] font-button ml-[50px] mt-[50px]"
            />
            
            <div className=" relative float-right">
                <Text 
                    text={"SEARCH"}
                    isHeader={false}
                    customTheme=" text-pink-600 text-[25px] font-button "
                />
                <Button theme={" text-white p-3"}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} inverse size="xl"/>
                </Button>
            </div>
            {isChosen?(
                
  <Form formClass={"w-full bg-transparent"}>
       <div>
               <Card
                         
                          imgSrc={isChosen.image}
                          vid={isChosen.vid}
                          className={"max-w-xs mt-8"}
                        
                        />
               </div>
  <div className="flex ">
  <div className="pt-8 p-4 mb-2">
          <Text 
              text={"Movie ID: "}
              customTheme={"text-white font-button text-[25px] whitespace-nowrap"}
          />
      </div>
      <Input id="video_link" containerTheme={"w-full"} valuetext={isChosen.vid}  readonly={true}></Input>
  </div>
  <div className=" flex">
      <div className="pt-8 p-4 mb-2">
          <Text 
              text={"Movie Name:"}
              customTheme={"text-white font-button text-[25px] whitespace-nowrap"}
          />
      </div>
      <Input id="movie_name" containerTheme={"w-full"} valuetext={isChosen.name} onChange={(e)=>
        {
 
          setIsChosen({...isChosen,name:e.target.value})}
         } ></Input>
  </div>
  <div className=" flex">
      <div className="pt-8 p-4 mb-2">
          <Text 
              text={"Movie Review:"}
              customTheme={"text-white font-button text-[25px] whitespace-nowrap"}
          />
      </div>
      <Input id="movie_content" containerTheme={"w-full"}  valuetext={isChosen.review} onChange={(e)=>setIsChosen({...isChosen,review:e.target.value})} ></Input>
  </div>
  <div className=" flex">
      <div className="pt-8 p-4 mb-2">
          <Text 
              text={"Rating:"}
              customTheme={"text-white font-button text-[25px] whitespace-nowrap"}
          />
      </div>
      <Input id="data_release" containerTheme={"w-full"} valuetext={isChosen.ratting} onChange={(e)=>setIsChosen({...isChosen,ratting:e.target.value})} > </Input>
  </div>
  <div className=" flex">
      <div className="pt-8 p-4 mb-2">
          <Text 
              text={"Banner URL:"}
              customTheme={"text-white font-button text-[25px] whitespace-nowrap"}
          />
      </div>
      <Input id="cast" containerTheme={"w-full"} valuetext={isChosen.image} onChange={(e)=>setIsChosen({...isChosen,image:e.target.value})} ></Input>
  </div>
  <div className=" flex">
      <div className="pt-8 p-4 mb-2">
          <Text 
              text={"Video URL: "}
              customTheme={"text-white font-button text-[25px] whitespace-nowrap"}
          />
      </div>
      <Input id="director" containerTheme={"w-full"} valuetext={isChosen.link} onChange={(e)=>setIsChosen({...isChosen,link:e.target.value})} ></Input>
  </div>
  
  <div className=" flex">
      <div className="pt-8 p-4 mb-2">
          <Text 
              text={"TAGS"}
              customTheme={"text-white font-button text-[25px] whitespace-nowrap"}
          />
      </div>
      <div className=" flex w-8 pt-8 p-4 mb-2 ">
          <select id ="tags" className=" mr-10 bg-[#082032] rounded-[5px] text-white border-2 border-white border-solid"
          value={tagsChange[0]}
          onChange={(e)=>{
            setTagsChange([e.target.value,tagsChange[1],tagsChange[2]])
        
          }} >
              <option value="null">null</option>
              <option value="action">Action</option>
              <option value="anime">Anime</option>
              <option value="comedy">Comedy</option>
              <option value="dramas">Dramas</option>
              <option value="romance">Romance</option>
           
          </select>
          <select id ="tags_1" className=" mr-10 bg-[#082032] rounded-[5px] text-white border-2 border-white border-solid"
            value={tagsChange[1]}
            onChange={(e)=>{setTagsChange([tagsChange[0],e.target.value,tagsChange[2]])
            }}>
                <option value="null">null</option>
              <option value="action">Action</option>
              <option value="anime">Anime</option>
              <option value="comedy">Comedy</option>
              <option value="dramas">Dramas</option>
              <option value="romance">Romance</option>
          </select>
          <select id ="tags_2" className=" mr-10 bg-[#082032] rounded-[5px] text-white border-2 border-white border-solid"
            value={tagsChange[2]}
            onChange={(e)=>{setTagsChange([tagsChange[0],tagsChange[1],e.target.value])}}>
          <option value="null">null</option>
              <option value="action">Action</option>
              <option value="anime">Anime</option>
              <option value="comedy">Comedy</option>
              <option value="dramas">Dramas</option>
              <option value="romance">Romance</option>
          </select>
      </div>
  </div>
  <div className=" flex">
        <div className="pt-8 p-4 mb-2">
            <Text 
                text={"Collection: "}
                customTheme={"text-white font-button text-[25px] whitespace-nowrap"}
            />
        </div>
      <div className=" flex w-8 pt-8 p-4 mb-2 ">
      <select id ="tags" className=" mr-10 bg-[#082032] rounded-[5px] text-white border-2 border-white border-solid"
          value={episodeChosen}
          onChange={(e)=>{
           setEpisodeChosen(e.target.value)
            if(e.target.value==="addNew")
            {
              setCreateEp(true);
            }
            else{
              setCreateEp(false)
            }
          }} >
              <option value="null">null</option>
              {
             
                allEpisode.map(each=>
                  {
                    return   <option key={each.id}value={each.eid}>{each.collectionName}</option> 
                  }

                )
              } 
              <option value="addNew">+ New Episode</option>
             
           
          </select>
      </div>
      </div>
{ 
    createEp&&<div className=" flex">
    <div className="pt-8 p-4 mb-2">
              <Text 
                  text={"Create Collection "}
                  customTheme={"text-white font-button text-[25px] whitespace-nowrap"}
              />
          </div>
        <div className=" flex w-8 pt-8 p-4 mb-2 ">
        <div className="flex pt-8 p-4 mb-2">
          <Text 
              text={"Collection Name: "}
              customTheme={"text-white font-button text-[25px] whitespace-nowrap"}
          />
         </div>
           
          <Input id="Episode_name" containerTheme={"w-full"} valuetext={collectionName} onChange={(e)=>setCollectionName(e.target.value)} ></Input>
       
        </div>
        <div className="  ">
          <Button
    
          theme={"bg-pink-600 rounded-[5px] w-[100px] h-10 float-right"}
          onClick={(e)=>createCollection(e)}
          >
          <Text 
              text={"CREATE"}
              customTheme="text-white font-button text-[25px]"
          />
      </Button>
      </div>
    </div>
    
}


  <div className="flex pt-[80px]">
      <Button
          theme={"bg-pink-600 rounded-[5px] w-[100px] h-10 float-left"}
          onClick={saveSubmit}
      > 
          <Text 
              text={"SAVE"}
              customTheme="text-white font-button text-[25px]"
          />
      </Button>
      <Button
          theme={"bg-pink-600 rounded-[5px] w-[100px] h-10 float-right"}
          onClick={(e) => setIsChosen(null)}
      >
          <Text 
              text={"BACK"}
              customTheme="text-white font-button text-[25px]"
          />
      </Button>
  </div>
</Form>
            ):( 
            <div>
            <div className="mx-36 py-14 h-auto">
            
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
                    onClick={submit}
                    theme="w-14 rounded-full ml-0"
                  >
                    <FontAwesomeIcon icon={faMagnifyingGlass} inverse size="2x" />
                  </Button>
                </form>
                <div className="grid items-center justify-between grid-cols-3 grid-rows-4 my-5"></div>
              </div>
              <div className="grid items-center justify-between grid-cols-3 my-5">
                  {movies.length>0 &&
                    movies.map((each, i) => {
                    
                      return (
                        <Card
                          key={i}
                          imgSrc={each.image}
                          vid={each.vid}
                          className={"max-w-xs mt-8"}
                          onClick={async(e)=> 
                            {
                                setIsChosen(each)
                                setEpisodeChosen(each.haveEp)
                                if(each.type.split(",").length>0)
                                {
                                  tagsChange[0]=each.type.split(",")[0];
                                }
                                if(each.type.split(",").length>1)
                                {
                                  tagsChange[1]=each.type.split(",")[1];
                                }
                                if(each.type.split(",").length>2)
                                {
                                  tagsChange[2]=each.type.split(",")[2];
                                }
                                console.log(tagsChange)
                            }}
                        />
                      );
                    })}
                </div>
                </div>
            )}
          
            <Footer />
        </div>
    )
}

export default {
    routeProps: {
      path: "/changemovie",
      main: ChangeMovieInfoPage,
    },
  };