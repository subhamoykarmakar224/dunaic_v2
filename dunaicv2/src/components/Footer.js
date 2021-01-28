import React from 'react';
import './css/Footer.css';

function Footer() {
  return (
    <>
      <footer className="container py-5"> 
        <div className="row">
          <div className="col-12 col-md">
            <small className="d-block mb-3 text-muted">© 2020 DUNAiC Private Limited CIN 134592871494271</small>
          </div>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li><a  className='link-text' href="/">Cool stuff</a></li>
              <li><a  className='link-text' href="/">Random feature</a></li>
              <li><a  className='link-text' href="/">Team feature</a></li>
              <li><a  className='link-text' href="/">Stuff for developers</a></li>
              <li><a  className='link-text' href="/">Another one</a></li>
              <li><a  className='link-text' href="/">Last time</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Services</h5>
            <ul className="list-unstyled text-small">
              <li><a  className='link-text' href="/services">Resource</a></li>
              <li><a  className='link-text' href="/services">Resource name</a></li>
              <li><a  className='link-text' href="/services">Another resource</a></li>
              <li><a  className='link-text' href="/services">Final resource</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Contact Us</h5>
            <ul className="list-unstyled text-small">
              <li><a  className='link-text' href="/contact">Business</a></li>
              <li><a  className='link-text' href="/contact">Education</a></li>
              <li><a  className='link-text' href="/contact">Government</a></li>
              <li><a  className='link-text' href="/contact">Gaming</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li><a  className='link-text' href="/contact">Team</a></li>
              <li><a  className='link-text' href="/contact">Locations</a></li>
              <li><a  className='link-text' href="/contact">Privacy</a></li>
              <li><a  className='link-text' href="/contact">Terms</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
