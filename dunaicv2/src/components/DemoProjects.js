import React from 'react'
import { Link } from 'react-router-dom';
import { 
  Container, Card, CardDeck, Button
} from 'react-bootstrap'
import './css/DemoProject.css';


function DemoProjects() {
  return (
    <Container>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src="/assets/img/demoproject/covid.PNG" style={{ padding: '20px' }}/>
          <Card.Body>
            <Card.Title>LIVE COVID TRACKER</Card.Title>
            <Card.Text>
              This website is a responsive live covid tracket and was built using React.
            </Card.Text>
            <a href="https://covid-19-tracker-34cc5.web.app/" target="_blank">
              <Button variant="outline-primary">Visit Website</Button>
            </a>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.<br /><br />
              
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  )
}

export default DemoProjects
