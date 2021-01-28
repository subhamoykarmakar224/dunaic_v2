import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './css/HomeCarousel.css';


function HomeCarouselItem(props) {
  return (
    <>
      <Card className='home-cards'>
        <Card.Img src={props.src} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.desc}<br /><br />
            <Link to='/services'>
              <Button variant="outline-primary">
                Know More
              </Button>
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default HomeCarouselItem
