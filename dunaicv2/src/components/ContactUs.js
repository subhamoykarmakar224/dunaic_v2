import React from 'react';
import {
  Container, Row, Col, Card, Form, Button
} from "react-bootstrap";
import './css/ContactUs.css';

function ContactUs() {
  return (
    <>
      <Container>
        <div className="contact-director-cards">
          <Row className="">
            <Col sm>
              <Card className="card-person">
                <Card.Img
                  variant="top"
                  src="/assets/img/contact/subhamoy.jpg"
                />
                <Card.Body>
                  <Card.Title>Subhamoy Karmakar</Card.Title>
                  <Card.Text>
                    <b>Director, <br />dunaic.sk@gmail.com</b><br />
                  6+ years strong Research and Development experience and software product development. Currently pursuing PhD at University of California.
                </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card className="card-person">
                <Card.Img variant="top" src="/assets/img/contact/manoj.JPG" />
                <Card.Body>
                  <Card.Title>Manoj Raju</Card.Title>
                  <Card.Text>
                    <b>Director<br />
                  dunaic.mr@gmail.com</b> <br />
                  Business Developer & Market Player with focus on strategic management and innovation. B.Tech | PGD| MBA (Intertnational Business)
                </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        {/* Contact Form */}
        <Card>
          <Card.Body>
            <Card.Title>Contact Us</Card.Title>
            <Card.Text>
              <div>
                <Form>
                  <Form.Group controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Full Name" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                  </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicCompanyName">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control type="text" placeholder="Company Name (if Applicable)" />
                  </Form.Group>

                  <Form.Group controlId="formBasicCompanyPhone">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="text" placeholder="+91-0000000000" />
                  </Form.Group>

                  <Form.Group controlId="formBasicSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Subject" />
                  </Form.Group>

                  <Form.Group controlId="formBasicMail">
                    <Form.Label>Brief Desccription</Form.Label>
                    <Form.Control as="textarea" label="Mail body" rows={5} placeholder="Please describe your reason for reaching out to us in brief..." />
                  </Form.Group>
                  <Button className="float-right form-btns" variant="primary" type="submit">
                    Submit
                </Button>
                  <Button className="float-right form-btns" variant="outline-primary" type="reset">
                    Reset
                </Button>
                </Form>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default ContactUs
