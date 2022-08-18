import React from 'react'
// import {Link} from 'react-router-dom';
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap';
import logo from '../../assets/images/res-logo.png';
import '../../styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
            <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
                    <img src={logo} alt='logo'></img>
                    <h5>Tasty Treat</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum illum veritatis unde fugit, reiciendis iste!</p>
                </div>
            </Col>
            <Col lg="3" md="4" sm="6">
              <h4 className='footer__title'>Delivery Time</h4>
              <ListGroup className='delivery__time-list'>
                <ListGroupItem className='delivery__time-item border-0 ps-0'>
                  <span>Sunday-Thursday</span>
                  <p>10:00am - 11:00pm</p>
                </ListGroupItem>
                <ListGroupItem className='delivery__time-item border-0 ps-0'>
                  <span>Friday - saturday</span>
                  <p>off day</p>
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col lg="3" md="4" sm="6">
            <h4 className='footer__title'>Contact</h4>
              <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                  <p>Location: Mansoura, Sylhet 3100, Egypt</p>
                </ListGroupItem>
                <ListGroupItem className='delivery__time-item border-0 ps-0'>
                  <span>Phone: 01745425525</span>
                </ListGroupItem>
                <ListGroupItem className='delivery__time-item border-0 ps-0'>
                  <span>Email: example@gmail.com</span>
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col lg="3" md="4" sm="6">
            <h4 className='footer__title'>Newsletter</h4>
            <p>Subscribe our newsletter </p>
            <div className="newsletter">
              <input type="email" placeholder='Enter your email'/>
              <span><i className='ri-send-plane-line'></i></span>
            </div>
            </Col>
        </Row>
        <Row className='mt-5'>
          <Col lg="6" md="6">
            <p className='copyright__text'>Copyright - 2022, website made by Nihal Gamal.
              All rights reserved.</p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className='m-0'>Follow:</p>
              <span><i className='ri-facebook-line'></i></span>
              <span><i className='ri-github-line'></i></span>
              <span><i className='ri-youtube-line'></i></span>
              <span><i className='ri-linkedin-line'></i></span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer