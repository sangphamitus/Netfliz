import React, { useEffect,useState } from "react";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import { Text } from "./Text";
import { Card } from "./Card";

const responsive = {
	0: { items: 5 },
};


const ListMovies = ({title,list_movies_data}) => {
	const [listMovies,setlistMovies] = useState([]);


	useEffect(()=>
	{
		let movies_input=[];
		if(list_movies_data===undefined)
			movies_input=['Smile - Movie Poster 1', 'House of the Dragon - TV Poster 1', 'Minions Rise of Gru Poster 1', 'The Northman Poster 1', 'Creed 3 - Movie Poster 2']
		else 
			movies_input=list_movies_data;
		
		console.log(movies_input)
		
		setlistMovies( Object.values(movies_input).map(item => {
			return list_movies_data===undefined? (<Card imgSrc={require(`../assets/images/${item}.jpg`)} />)
			:(<Card imgSrc={item.image} vid={item.vid}/>)
			}))
	},[list_movies_data])
    return (
	<div>
		<Text 
			text={title}
			customTheme="text-[2rem] text-pink-600 font-button px-5"
			isHeader={true}
		/>
        <AliceCarousel
			responsive={responsive}
			autoPlayControls={false}
			infinite={true}
			disableDotsControls={true}
			disableButtonsControls={false}
			items={listMovies}
			paddingLeft={22}
        />
	</div>
    )
}

export { ListMovies };