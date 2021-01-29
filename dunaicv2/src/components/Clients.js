import React from 'react'
import { 
  Container, Card, CardColumns
} from 'react-bootstrap';
import './css/Clients.css';
import Feedback from './Feedback';

function Clients() {
  return (
    <Container style={{ minHeight: "500px" }}>
      <h4 style={{ marginTop: "20px" }}>Clients</h4>
      <CardColumns>
        <Card className="card-client" style={{ width: '80' }}>
          <Card.Img variant="top" src="/assets/img/clients/brg.png" />
          <Card.Body>
            <Card.Title>Bengal Rehabilitation Group</Card.Title>
            <Card.Text>
            Bengal rehabilitation is an organisation that work’s with disabilities of the people to overcome and yield a prosperous life.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardColumns>
      <Feedback />
    </Container>
  )
}

export default Clients;
