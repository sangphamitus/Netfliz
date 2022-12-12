import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Text } from "./Text";

const Rate = () => {
	const [rate, setRate] = useState(0);
	const [hover, setHover] = useState(null);

	return (	
		<div className=" text-[20px] ">
			<Text text={rate} isHeader={false} customTheme={"text-white pr-[5px]"}/>
			{[...Array(5)].map((star, index) => {
				const Rating = index + 1;
				return (
				<label>
					<button
						type="button"
						value={Rating}
						onClick={() => {setRate(Rating)}}
					/>
					<div className=" cursor-pointer inline-flex">
						<FontAwesomeIcon icon={faStar}
							color={Rating <= (hover || rate) ? "#FFFF00" : "#FFFFFF"}
							onMouseEnter={() => {setHover(Rating)}}
							onMouseLeave={() => {setHover(null)}}
						/>
					</div>
				</label>
				);
			})}
		</div>
	);
};

export { Rate };
