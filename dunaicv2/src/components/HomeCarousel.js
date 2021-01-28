import React from 'react';
import './css/HomeCarousel.css';
import Slider from "react-slick";
import HomeCarouselItem from './HomeCarouselItem';
import { Container } from 'react-bootstrap';

function HomeCarousel() {

  let settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Slider {...settings}>
        <div>
          <HomeCarouselItem
            src='/assets/img/home/sde.png'
            title='Software Development'
            desc='CUSTOM APPLICATION SOFTWARE DEVELOPMENT IS THE PROCESS TO AUTOMATE BUSINESS PROCESS.'
          />
        </div>
        <div>
          <HomeCarouselItem
            src='/assets/img/home/analytics_dev.png'
            title='Software Development'
            desc='TOOLS OR ALGORITHMS FOR PROVIDING HIDDEN INSIGHTS OR PATTERNS FROM RAW DATA.'
          />
        </div>
        <div>
          <HomeCarouselItem
            src='/assets/img/home/iot_dev.png'
            title='Internet-of-Things'
            desc='PREPARE FOR THE INEVITABLE CHANGE THAT WILL TRANSFORM ALL INDUSTRIES BY BLURRING THE LINES BETWEEN PHYSICAL SPACE AND CYBERSPACE.'
          />
        </div>
        <div>
          <HomeCarouselItem
            src='/assets/img/home/mobile_dev.png'
            title='Mobile Development'
            desc='MOBILE APPLICATION DEVELOPMENT BY WHICH APPLICATION SOFTWARE IS DEVELOPED FOR HANDHELD DEVICES.'
          />
        </div>
        <div>
          <HomeCarouselItem
            src='/assets/img/home/uav_dev.png'
            title='Software Development'
            desc='ON-DEMAND AERIAL DELIVERY/SURVEILLANCE PLATFORM FOR ALL ENVIRONMENTS: END-TO-END SOLUTION INTEGRATING DRONES, DOCKING STATIONS AND SOFTWARE SOLUTIONS ON CLOUD. WE PROVIDE SERVICE TO HEALTHCARE, E-COMMERCE, AND MORE.'
          />
        </div>
        <div>
          <HomeCarouselItem
            src='/assets/img/home/web_dev.png'
            title='Software Development'
            desc='BUILD WEBSITE THAT WORK EFFORTLESSLY ON ALL MOBILE AND WEB PLATFORM.'
          />
        </div>
      </Slider>
    </Container>
  )
}

export default HomeCarousel
