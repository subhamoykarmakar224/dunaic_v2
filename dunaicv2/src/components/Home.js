import React from 'react';
import { Link } from "react-router-dom";
import './css/Home.css';
import HomeCarousel from './HomeCarousel';
import ClientFeedback from './ClientFeedback';
import {
  Container, Button
} from 'react-bootstrap';

function Home() {
  return (
    <>
      <Container>
        <h4 style={{ marginTop: '20px' }}>OUR SERVICES AND GOALS</h4>
      </Container>
      <HomeCarousel />
      <br />
      <br />
      <Container>
        <h4>WHY DUNAIC?</h4>
        <p>We concentrate on delivering products and roll out services that are unique to You as a client. Low vendor risk - sustainable relationship 100% + repeat business Best people: low attrition Industry and technology expertise Quality solutions - in time and within budget High confidence levels in delivery and relationship Quick time to market, and lower costs</p>
        <Link to='/services'>
          <Button variant="outline-primary">OUR SERVICES</Button>
        </Link>
        <br />
        <br />
        <h4>CLIENTS FEEDBACK</h4>
        <ClientFeedback />
      </Container>
    </>
  )
}

export default Home
