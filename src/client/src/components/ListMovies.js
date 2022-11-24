import React from "react";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import { Text } from "./Text";
import { Card } from "./Card";

const responsive = {
	0: { items: 5 },
};

let new_movies = ['Spider-Man_ Into the Spider-Verse 1', 'Black Panther_ Wakanda Forever 1', 'John Wick Chapter 4 1', 'Everything Everywhere All at Once - Movie Poster 1', 'Avatar 2022- Movie Poster 1'].map((name, index) => {
	return <Card imgSrc={require(`../assets/images/${name}.jpg`)} />
});

let hot_movies = ['Smile - Movie Poster 1', 'House of the Dragon - TV Poster 1', 'Minions Rise of Gru Poster 1', 'The Northman Poster 1', 'Creed 3 - Movie Poster 2'].map((name, index) => {
	return <Card imgSrc={require(`../assets/images/${name}.jpg`)} />
});

const ListMovies = ({title}) => {
    return (
	<div>
		<Text 
			text={title}
			customTheme="text-[60px] text-pink-600 font-button"
			isHeader={true}
		/>
        <AliceCarousel
			responsive={responsive}
			autoPlay={true}
			autoPlayControls={false}
			autoPlayDirection='ltr'
			autoPlayInterval={700}
			animationDuration={1000}
			autoPlayStrategy="none"
			animationType="slide"
			infinite={true}
			disableDotsControls={true}
			disableButtonsControls={true}
			items={title === "NEW MOVIES" ? new_movies : hot_movies}
        />
	</div>
    )
}

export { ListMovies };