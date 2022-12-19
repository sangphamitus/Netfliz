import React from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Text } from "../components/Text";
import { NavBar } from '../components/NavBar';
import { Footer} from '../components/Footer';
import { Rate } from "../components/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

function MovieInfoPage() {
   
    return (
        <div className="App bg-[#082032]">
            <NavBar isLogin={false}/>
            <div className=" relative">
                <iframe className="w-full h-[620px] relative z-0" src="https://www.youtube.com/embed/BcDK7lkzzsU" title="Smile | Official Trailer (2022 Movie)" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                <div className=" absolute top-[215px] left-[50px] z-[1]">
                    <Text text={"SMILE"} isHeader={true} customTheme={"text-6xl text-white"}/>
                    <Button theme={"bg-[#D9D9D9] rounded-[3px] w-[150px] h-[60px] absolute top-[300px]"}>
                        <FontAwesomeIcon icon={faPlay} size="2x"/>
                        <Text
                        customTheme="text-[40px] leading-none text-black-200 font-button"
                        isHeader={false}
                        text={"Watch"}
                        />
                    </Button>
                    <Button theme={"bg-[#D9D9D9] rounded-[3px] w-[150px] h-[60px] absolute top-[300px] left-[170px]"}>
                        <FontAwesomeIcon icon={faAdd} size="2x"/>
                        <Text
                        customTheme="text-[40px] leading-none text-black-200 font-button"
                        isHeader={false}
                        text={"List"}
                        />
                    </Button>
                </div>
            </div>
            <div className=" inline-flex p-[20px]">
                <Text text={"400 VIEWED"} isHeader={false} customTheme={"text-white text-[20px] pr-[20px]"}/>
                <Rate />
            </div>
            <div className="flex p-[20px]">
                <div>
                <Text text={"2022 | Action | 1h 55m"} isHeader={false} customTheme={"text-white "}/>
                <p className=" text-white w-[500px] h-[150px]">
                    Cười là phim điện ảnh kinh dị tâm lý Mỹ năm 2022 do Parker Finn biên kịch 
                    và đạo diễn, dựa trên phim ngắn "Laura Has't Slept" năm 2020 của anh. Trong phim, 
                    nữ diễn viên Sosie Bacon vào vai bác sĩ trị liệu Rose Cotter, cô gặp phải 
                    những hiện tượng siêu nhiên kỳ lạ sau khi một bệnh nhân tự tử ngay tại phòng khám.
                </p>
                </div>
                <div className=" flex flex-col">
                <Text text={"Đạo diễn: Parker Finn"} isHeader={false} customTheme={"text-white ml-[100px]"}/>
                <Text text={"Diễn Viên: Sosie Bacon, Kyle Gallner, ..."} isHeader={false} customTheme={"text-white ml-[100px]"}/>
                </div>
            </div>
            <div>
                <Text text={"EPISODES"} isHeader={true} customTheme={"text-[2rem] text-pink-600 font-button px-5"} />
            </div>
            <div className='w-auto min-h-[18rem] h-auto my-10 mx-5'>
                <Text text={"Comments"} customTheme={"text-[2rem] px-5 text-white"} isHeader={true}/>
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