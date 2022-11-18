import React from "react";
import { Text } from "./Text";
import NetflizLogo from '../assets/images/pink2-logo.png'

const Footer = () => {
    return(
        <div className="bg-[#2C394B] py-16 px-14 height-260 flex">
            <div>
                    <ul>
                        <li style ={{listStyle:'none'}}> 
                            <Text text="FAQ" isHeader={false} customTheme="text-[1.5rem] text-white font-button" Href="/"/>
                        </li>
                        <li>
                            <Text text="Help center" isHeader={false} customTheme="text-[1.5rem] text-white font-button" Href="/"/>
                        </li>
                        <li>
                            <Text text="Term of use" isHeader={false} customTheme="text-[1.5rem] text-white font-button" Href="/"/>
                        </li>
                        <li>
                            <Text text="Contact us" isHeader={false} customTheme="text-[1.5rem] text-white font-button" Href="/"/>
                        </li>
                        <li>
                            <Text text="Tin dep trai" isHeader={false} customTheme="text-[1.5rem] text-white font-button" Href="/"/>
                        </li>
                    </ul>
            </div>
            <div className="ml-auto mr-0 mt-10">
                <img src={NetflizLogo} className='logo' alt='logo' width="160rem" />
            </div>
        </div> 
    )
}

export { Footer };
