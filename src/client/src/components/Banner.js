import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const items = [
   <img src={require('../assets/images/banner1.jpg')} alt="banner1" />,
   <img src={require('../assets/images/banner2.jpg')} alt="banner2" />,
   <img src={require('../assets/images/banner3.jpg')} alt="banner3" />
]

const Banner = () => {
  return (
    <AliceCarousel 
        autoPlay={false}
        autoPlayControls={false}
        autoPlayStrategy="none"
        autoPlayInterval={1500}
        animationDuration={1000}
        animationType="fadeout"
        infinite={true}
        disableDotsControls={true}
        disableButtonsControls={false}
        items={items}
        renderPrevButton={() => {
            return <FontAwesomeIcon icon={faAngleLeft} className=' absolute top-[230px] text-[50px] cursor-pointer left-[10px] text-white' />
        }}
        renderNextButton={() => {
            return <FontAwesomeIcon icon={faAngleRight} className=' absolute top-[230px] text-[50px] cursor-pointer right-[10px] text-white' />
        }}
    />
  )
}

export {Banner};