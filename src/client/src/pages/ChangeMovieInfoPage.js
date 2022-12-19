import React from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Text } from "../components/Text";
import { Button } from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { useNavigate } from "react-router-dom";

function ChangeMovieInfoPage() {
    const navigate = useNavigate();
    return (
        <div className="App bg-[#082032]">
            <NavBar isLogin={true} allowSearch={true}/>
            <Text 
                text={"CHANGE MOVIE INFO"}
                isHeader={true}
                customTheme="text-pink-600 text-[30px] font-button ml-[50px] mt-[50px]"
            />
            <div className=" relative left-[1000px]">
                <Text 
                    text={"SEARCH"}
                    isHeader={false}
                    customTheme=" text-pink-600 text-[25px] font-button "
                />
                <Button theme={" text-white p-3"}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} inverse size="xl"/>
                </Button>
            </div>
            <Form formClass={"w-full bg-transparent"}>
                <div className="flex ">
                    <div className="pt-8 p-4 mb-2">
                        <Button theme={"bg-pink-600 rounded-[5px] w-[100px] h-10"}>
                            <Text 
                                text={"UPLOAD"}
                                customTheme="text-white font-button text-[25px]"
                            />
                        </Button>
                    </div>
                    <Input id="video_link" containerTheme={"w-full"}></Input>
                </div>
                <div className=" flex">
                    <div className="pt-8 p-4 mb-2">
                        <Text 
                            text={"MOVIE NAME"}
                            customTheme={"text-white font-button text-[25px] whitespace-nowrap"}
                        />
                    </div>
                    <Input id="movie_name" containerTheme={"w-full"}></Input>
                </div>
                <div className=" flex">
                    <div className="pt-8 p-4 mb-2">
                        <Text 
                            text={"MOVIE CONTENT"}
                            customTheme={"text-white font-button text-[25px] whitespace-nowrap"}
                        />
                    </div>
                    <Input id="movie_content" containerTheme={"w-full"}></Input>
                </div>
                <div className=" flex">
                    <div className="pt-8 p-4 mb-2">
                        <Text 
                            text={"DATE RELEASE"}
                            customTheme={"text-white font-button text-[25px] whitespace-nowrap"}
                        />
                    </div>
                    <Input id="data_release" containerTheme={"w-full"}></Input>
                </div>
                <div className=" flex">
                    <div className="pt-8 p-4 mb-2">
                        <Text 
                            text={"CAST"}
                            customTheme={"text-white font-button text-[25px] whitespace-nowrap"}
                        />
                    </div>
                    <Input id="cast" containerTheme={"w-full"}></Input>
                </div>
                <div className=" flex">
                    <div className="pt-8 p-4 mb-2">
                        <Text 
                            text={"DIRECTOR"}
                            customTheme={"text-white font-button text-[25px] whitespace-nowrap"}
                        />
                    </div>
                    <Input id="director" containerTheme={"w-full"}></Input>
                </div>
                <div className=" flex">
                    <div className="pt-8 p-4 mb-2">
                        <Text 
                            text={"BANNER IMG"}
                            customTheme={"text-white font-button text-[25px] whitespace-nowrap"}
                        />
                    </div>
                    <Input id="banner_img" containerTheme={"w-full"}></Input>
                    <div className="pt-8 p-4 mb-2">
                        <Button theme={"bg-pink-600 rounded-[5px] w-[100px] h-10"}>
                                <Text 
                                    text={"UPLOAD"}
                                    customTheme="text-white font-button text-[25px]"
                                />
                        </Button>
                    </div>
                </div>
                <div className=" flex">
                    <div className="pt-8 p-4 mb-2">
                        <Text 
                            text={"TRAILER VID"}
                            customTheme={"text-white font-button text-[25px] whitespace-nowrap"}
                        />
                    </div>
                    <Input id="trailer_vid" containerTheme={"w-full"}></Input>
                    <div className="pt-8 p-4 mb-2">
                        <Button theme={"bg-pink-600 rounded-[5px] w-[100px] h-10"}>
                                <Text 
                                    text={"UPLOAD"}
                                    customTheme="text-white font-button text-[25px]"
                                />
                        </Button>
                    </div>
                </div>
                <div className=" flex">
                    <div className="pt-8 p-4 mb-2">
                        <Text 
                            text={"TAGS"}
                            customTheme={"text-white font-button text-[25px] whitespace-nowrap"}
                        />
                    </div>
                    <div className=" flex w-8 pt-8 p-4 mb-2 ">
                        <select id ="tags" className=" mr-10 bg-[#082032] rounded-[5px] text-white border-2 border-white border-solid">
                            <option value={"All"}>All</option>
                            <option value={"Featured"}>Featured</option>
                            <option value={"New"}>New</option>
                            <option value={"Rating"}>Rating</option>
                        </select>
                        <select id ="tags" className=" mr-10 bg-[#082032] rounded-[5px] text-white border-2 border-white border-solid">
                            <option value={"All"}>All</option>
                            <option value={"Featured"}>Featured</option>
                            <option value={"New"}>New</option>
                            <option value={"Rating"}>Rating</option>
                        </select>
                        <select id ="tags" className=" mr-10 bg-[#082032] rounded-[5px] text-white border-2 border-white border-solid">
                            <option value={"All"}>All</option>
                            <option value={"Featured"}>Featured</option>
                            <option value={"New"}>New</option>
                            <option value={"Rating"}>Rating</option>
                        </select>
                    </div>
                </div>
                <div className="flex pt-[80px]">
                    <Button
                        theme={"bg-pink-600 rounded-[5px] w-[100px] h-10 "}
                    >
                        <Text 
                            text={"SAVE"}
                            customTheme="text-white font-button text-[25px]"
                        />
                    </Button>
                    <Button
                        theme={"bg-pink-600 rounded-[5px] w-[100px] h-10 ml-[850px]"}
                        onClick={() => navigate({ pathname: "/admin" })}
                    >
                        <Text 
                            text={"BACK"}
                            customTheme="text-white font-button text-[25px]"
                        />
                    </Button>
                </div>
            </Form>
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