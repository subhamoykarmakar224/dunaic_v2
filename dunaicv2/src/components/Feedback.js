import React, { useState, useEffect } from 'react'
import { Card, Button, Modal, Form } from "react-bootstrap";
import Slider from "react-slick";
import firebase from './util/FirebaseConfig';
import './css/Feedback.css'
function Feedback() {
  const [feedbacks, setFeedbacks] = useState([])
  const [show, setShow] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [errorMsg, setErrorMsg] = useState('')
  const [showErrorDialog, setShowErrorDialog] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDialogClose = () => setShowDialog(false);

  const handleErrorClose = () => {
    setShowErrorDialog(false);
  }

  // Feedback Form
  const [otp, setOTP] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [rating, setRating] = useState('')
  const [FEEDBACK, setFeedback] = useState('')

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

  const RatingWords = {
    "5": "Very Satisfied",
    "4": "Satisfied",
    "3": "Neutral",
    "2": "Dissatisfied",
    "1": "Very Dissatisfied",
    "0": "Not Rated",
  }

  useEffect(() => {
    firebase.firestore().collection('feedbacks').onSnapshot(
      snapshots => {
        const listFeedback = snapshots.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFeedbacks(listFeedback);
      }
    )
  }, [])

  const onFeedbackSubmit = e => {
    e.preventDefault();
    if (otp.length < 4) {
      setErrorMsg('Invalid OTP.')
      setShowErrorDialog(true)
      return;
    }
    var i = '';
    firebase.firestore().collection('FeedbackOTP')
      .where("otp", "==", otp)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          i = doc.id;
          // console.log(doc.id, " => ", doc.data());
        });

        if (!(querySnapshot.docs.length >= 1)) {
          setErrorMsg('The OTP you have entered is invalid. To submit a feedback you need to get in touch with us and we will provide you with an OTP.')
          setShowErrorDialog(true)
          return;
        }

        if (name.length <= 0) {
          setErrorMsg('Name cannot be left blank.')
          setShowErrorDialog(true)
          return;
        }

        if (email.length <= 0) {
          setErrorMsg('Email cannot be left blank.')
          setShowErrorDialog(true)
          return;
        }

        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
          setErrorMsg('The email you have entered is invalid. Please enter a valid email.')
          setShowErrorDialog(true)
          return;
        }

        if (company.length <= 0) {
          setErrorMsg('Company name cannot be left blank.')
          setShowErrorDialog(true)
          return;
        }

        if (rating === '' || rating === '0') {
          setErrorMsg('Rating can be only filled between 1-5. Please choose a valid rating.')
          setShowErrorDialog(true)
          return;
        }

        if (FEEDBACK.length < 20) {
          setErrorMsg('Feedback needs to be atleast of length 20.')
          setShowErrorDialog(true)
          return;
        }

        firebase.firestore().collection('feedbacks')
          .add({
            name, email, company, phone, rating, FEEDBACK
          })
          .then(() => {
            setShow(false);
            setShowDialog(true);
            firebase
              .firestore()
              .collection("FeedbackOTP")
              .doc(i)
              .delete();
            setName('');
            setEmail('')
            setCompany('')
            setPhone('')
            setRating('')
            setFeedback('')
          });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  };

  return (
    <>
      <h4 style={{ marginTop: "20px" }}>
        CLIENTS FEEDBACK
      </h4>

      <Slider {...settings} className="slider-div">

        <div key={0} className="div-add-feedback" onClick={handleShow}>
          <Card bg='light' style={{ width: '18rem', height: '15rem' }}>
            <Card.Body>
              <Card.Text >
                <img src="/assets/ico/add.svg" width='40' atl="Add" />
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        {feedbacks.length <= 0 ?
          // <i>Be the first one to give us a feedback.</i>
          <span></span>
          : feedbacks.map(feedback => (
            <div key={feedback.id}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{feedback.company}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{feedback.name}, {RatingWords[feedback.rating]}</Card.Subtitle>
                  <Card.Text>{feedback.FEEDBACK}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
      </Slider>

      {/* Feedback Form */}
      <Modal backdrop="static" show={show} onHide={handleClose} style={{ padding: '10px' }}>
        <Modal.Header closeButton>
          <Modal.Title>Submit Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form.Group controlId="formBasicOTP">
            <Form.Label>OTP</Form.Label>
            <Form.Control
              type="text"
              placeholder="OTP"
              onChange={e => setOTP(e.currentTarget.value)}
              value={otp}
            />
          </Form.Group>

          <Form.Group controlId="formBasicName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Full Name"
              onChange={e => setName(e.currentTarget.value)}
              value={name}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={e => setEmail(e.currentTarget.value)}
              value={email}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
              </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicCompanyName">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Company Name (if Applicable)"
              onChange={e => setCompany(e.currentTarget.value)}
              value={company}
            />
          </Form.Group>

          <Form.Group controlId="formBasicCompanyPhone">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type="text"
              placeholder="+91-0000000000"
              onChange={e => setPhone(e.currentTarget.value)}
              value={phone}
            />
          </Form.Group>

          <Form.Group controlId="formBasicRating">
            <Form.Label>Please Rate Your Experience</Form.Label>
            <Form.Control as="select"
              onChange={e => setRating(e.currentTarget.value)}
              value={rating}>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicMail">
            <Form.Label>Feedback</Form.Label>
            <Form.Control
              as="textarea"
              label="Mail body" rows={5}
              placeholder="Your feedback"
              onChange={e => setFeedback(e.currentTarget.value)}
              value={FEEDBACK}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={onFeedbackSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Alert Dialog Box */}
      <Modal
        show={showDialog}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Saved</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your feedback has been saved. Thank You so much.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleDialogClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showErrorDialog}
        onHide={handleClose}
        backdrop="static"
        bg='danger'
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errorMsg}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleErrorClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Feedback
