import React, { useState, useEffect } from 'react';
import { Modal } from "react-bootstrap";
import {
  Container, Row, Col, Card, Form, Button
} from "react-bootstrap";
import './css/ContactUs.css';
import firebase from './util/FirebaseConfig';


function ContactUs() {
  const [contactname, setContactName] = useState('')
  const [contactemail, setContactEmail] = useState('')
  const [contactcompany, setContactCompany] = useState('')
  const [contactphone, setContactPhone] = useState('')
  const [contactsubject, setContactSubject] = useState('')
  const [contactdesc, setContactDesc] = useState('')

  const [errorMsg2, setErrorMsg2] = useState('')
  const [showErrorDialog2, setShowErrorDialog2] = useState(false);

  const handleErrorClose2 = () => {
    setShowErrorDialog2(false);
  }

  const submitContactForm = () => {

    if (contactname.length <= 0) {
      setErrorMsg2('Name cannot be left blank.')
      setShowErrorDialog2(true)
      return;
    }

    if (contactemail.length <= 0) {
      setErrorMsg2('Email cannot be left blank.')
      setShowErrorDialog2(true)
      return;
    }

    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(contactemail)) {
      setErrorMsg2('The email you have entered is invalid. Please enter a valid email.')
      setShowErrorDialog2(true)
      return;
    }

    if (contactcompany.length <= 0) {
      setErrorMsg2('Company name cannot be left blank.')
      setShowErrorDialog2(true)
      return;
    }

    if (contactphone.length < 10) {
      setErrorMsg2('Please enter a valid phone number to continue.')
      setShowErrorDialog2(true)
      return;
    }

    if (contactsubject.length <= 0) {
      setErrorMsg2('Subject field cannot be left blank.')
      setShowErrorDialog2(true)
      return;
    }

    if (contactdesc.length <= 50) {
      setErrorMsg2('Please describe your query in no less than 50 letter.')
      setShowErrorDialog2(true)
      return;
    }

    firebase.firestore().collection('contactus')
      .add({
        contactname, contactemail, contactcompany, contactphone, contactsubject, contactdesc
      })
      .then(() => {
        setErrorMsg2('Thank you for getting in touch with us. We will get back to you in 24-48hours.');
        setShowErrorDialog2(true);
        setContactName('');
        setContactEmail('');
        setContactCompany('');
        setContactPhone('');
        setContactSubject('');
        setContactDesc('');
      });

    
  };

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
        <Card className="card-contact-form">
          <Card.Body>
            <Card.Title>Contact Us</Card.Title>
            <Card.Text>
              <div>
                <Form>
                  <Form.Group controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Your Full Name"
                      onChange={e => setContactName(e.currentTarget.value)}
                      value={contactname} />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                      onChange={e => setContactEmail(e.currentTarget.value)}
                      value={contactemail} />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                  </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicCompanyName">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control type="text" placeholder="Company Name (if Applicable)"
                      onChange={e => setContactCompany(e.currentTarget.value)}
                      value={contactcompany} />
                  </Form.Group>

                  <Form.Group controlId="formBasicCompanyPhone">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="text" placeholder="+91-0000000000"
                      onChange={e => setContactPhone(e.currentTarget.value)}
                      value={contactphone} />
                  </Form.Group>

                  <Form.Group controlId="formBasicSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Subject"
                      onChange={e => setContactSubject(e.currentTarget.value)}
                      value={contactsubject} />
                  </Form.Group>

                  <Form.Group controlId="formBasicMail">
                    <Form.Label>Brief Desccription</Form.Label>
                    <Form.Control as="textarea" label="Mail body" rows={5} placeholder="Please describe your reason for reaching out to us in brief..."
                      onChange={e => setContactDesc(e.currentTarget.value)}
                      value={contactdesc} />
                  </Form.Group>
                  <Button
                    className="float-right form-btns"
                    variant="primary"
                    onClick={submitContactForm}>
                    Submit
                </Button>
                </Form>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <Modal
        show={showErrorDialog2}
        onHide={handleErrorClose2}
        backdrop="static"
        bg='danger'
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Alert</Modal.Title>
        </Modal.Header> 
        <Modal.Body>
          {errorMsg2}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleErrorClose2}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ContactUs
