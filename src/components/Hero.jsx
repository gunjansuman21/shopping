import React from 'react'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import men from './../assets/men.png'
import women from './../assets/women.png' 
import bag from './../assets/beg.png'
import './Hero.css'

function Hero() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true ,
        autoplaySpeed : 2500,
      };
  return (
    <div>
      <Slider {...settings}> 
   <div>
    <img className='h-full w-full object-cover' src={men}/>
   </div>
   <div>
   <img className='h-full w-full object-cover' src={women}/>
   </div>
   <div>
   <img  className='h-full w-full object-cover'src={bag}/>
   </div>
      </Slider>
    </div>
  )
}

export default Hero;

