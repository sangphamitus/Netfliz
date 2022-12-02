import React from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Text } from "../components/Text";
import { NavBar } from '../components/NavBar';
import { Footer} from '../components/Footer';
import { Rate } from "../components/Rating";

function MovieInfoPage() {
   
    return (
        <div className="App bg-[#082032]">
            <NavBar isLogin={false}/>
            <div className=" relative">
                <iframe className="w-full h-[620px] relative z-0" src="https://www.youtube.com/embed/BcDK7lkzzsU" title="Smile | Official Trailer (2022 Movie)" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                <div className=" absolute top-[215px] left-[50px] z-[1]">
                    <Text text={"SMILE"} isHeader={true} customTheme={"text-6xl text-white"}/>
                    <Rate />
                    <p className="max-w-[250px] text-white font-normal">
                    After witnessing a bizarre, traumatic incident involving a patient, 
                    Dr. Rose Cotter starts experiencing frightening occurrences that 
                    she can't explain. Rose must confront her troubling past in order to 
                    survive and escape her horrifying new reality.
                    </p> 

                </div>
            </div>

            <div className='bg-[#E5E5E5] w-auto min-h-[18rem] h-auto my-10 mx-5'>
                <Text text={"Comments"} customTheme={"text-[2rem] px-5"} isHeader={true}/>
                <div className='flex px-5 my-5'>
                    <Input containerTheme={"min-w-[38rem] pt-0"}/>
                    <Button theme={"bg-pink-600 rounded-2xl w-auto h-auto px-3 mx-3 px-4"}>
                        <Text
                        customTheme="text-[2rem] leading-none text-gray-200 font-button"
                        isHeader={false}
                        text="Comment"
                        />
                    </Button>
                </div>

                <div>
                    {/* show comments */}
                </div>

            </div>
            
            <Footer/>
        </div>
    )
}

export default MovieInfoPage;