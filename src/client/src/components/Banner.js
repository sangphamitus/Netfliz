import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
   <img src={require('../assets/images/banner1.jpg')} alt="banner1"  />,
   <img src={require('../assets/images/banner2.jpg')} alt="banner2"  />,
   <img src={require('../assets/images/banner3.jpg')} alt="banner3"  />
]

const Banner = () => {
  return (
    <AliceCarousel 
      autoPlay={true}
      autoPlayControls={false}
      autoPlayStrategy="none"
      autoPlayDirection='ltr'
      autoPlayInterval={1000}
      animationDuration={2000}
      animationType="fadeout"
      infinite={true}
      disableDotsControls={true}
      disableButtonsControls={true}
      items={items}
    />
  )
}

export {Banner};