import React from 'react';
import { Card, Form, Button, Container } from 'react-bootstrap';

function Admin() {
  return (
    <Container style={{ display: 'flex',  justifyContent:'center', alignItems:'center', height: '80vh' }}>
      <Card style={{ width: '25rem', borderRadius: '10px' }}>
        <Card.Body>
          <Card.Title>Admin Login</Card.Title>
          <Card.Text>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Admin;
