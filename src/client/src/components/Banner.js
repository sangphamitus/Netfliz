import React from 'react'
import Carousel from 'better-react-carousel'

const Banner = () => {
  return (
    <Carousel loop={true} srollSnap={true}>
      <Carousel.Item>
        <img src={require('../img/banner1.jpg')} alt="banner1" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={require('../img/banner2.jpg')} alt="banner2" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={require('../img/banner3.jpg')} alt="banner3" />
      </Carousel.Item>
    </Carousel>
  )
}

export {Banner};