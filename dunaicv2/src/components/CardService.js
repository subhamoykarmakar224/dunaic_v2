import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap';

function CardService(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const shortenText = () => {
    var tmpDesc = props.desc;
    if(tmpDesc.length >= 80) {
      return tmpDesc.substr(0, 100) + "...";
    }
    return tmpDesc;
  };

  return (
    <>
      <Card className={props.classprop}>
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{shortenText()}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button onClick={handleShow}>More...</Button>
        </Card.Footer>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.desc}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CardService