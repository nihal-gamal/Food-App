import React,{useRef} from 'react'
import {Col, Container, Row} from 'reactstrap';
import CommonSection from '../components/UI/common-section/CommonSection';
import Helmet from './../components/Helmet/Helmet';
import { Link } from 'react-router-dom';

function Register() {
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const submittHandler=(e)=>{
    e.preventDefault()

  }
  return (
    <Helmet title='SignUp'>
      <CommonSection title='SignUp'>
      </CommonSection>
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
              <form  className="form mb-5" onSubmit={submittHandler}>
              <div className="form__group">
                  <input type='text' placeholder='User Name'required ref={nameRef}/>
                </div>
                <div className="form__group">
                  <input type='email' placeholder='Email'required ref={emailRef}/>
                </div>
                <div className="form__group">
                  <input type='password' placeholder='password' required ref={passwordRef}/>
                </div>
                <button className='add mt-4' type='submit'>Sign Up</button>
              </form>
              <Link to='/login'>Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}


export default Register