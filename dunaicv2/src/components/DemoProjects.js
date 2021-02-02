import React from 'react'
import {
  Container, Card, CardDeck, Button
} from 'react-bootstrap'
import './css/DemoProject.css';


function DemoProjects() {
  return (
    <Container>
      <CardDeck style={{ marginTop: '20px'}} >
        <Card>
          <Card.Img variant="top" src="/assets/img/demoproject/covid.PNG" style={{ padding: '20px' }} />
          <Card.Body>
            <Card.Title>LIVE COVID TRACKER</Card.Title>
            <Card.Text>
              This website is a responsive live covid tracker and was built using React.
            </Card.Text>
            <a href="https://covid-19-tracker-34cc5.web.app/" rel="noreferrer" target="_blank">
              <Button variant="outline-primary">Visit Website</Button>
            </a>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="/assets/img/demoproject/demowebsite2.PNG" />
          <Card.Body>
            <Card.Title>DEMO WEBSITE 1</Card.Title>
            <Card.Text>
              This website is a demo website made to illustrate a responsive static website made with React.
            </Card.Text>
            <a href="https://demowebsite002-8f00d.web.app/" rel="noreferrer" target="_blank">
              <Button variant="outline-primary">Visit Website</Button>
            </a>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  )
}

export default DemoProjects
