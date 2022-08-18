import React,{useRef} from 'react'
import {Col, Container, Row} from 'reactstrap';
import CommonSection from '../components/UI/common-section/CommonSection';
import Helmet from './../components/Helmet/Helmet';
import { Link } from 'react-router-dom';

function Login() {
  const nameRef = useRef()
  const passwordRef = useRef()
  const submittHandler=(e)=>{
    e.preventDefault()

  }
  return (
    <Helmet title='login'>
      <CommonSection title='login'>
      </CommonSection>
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
              <form  className="form mb-5" onSubmit={submittHandler}>
                <div className="form__group">
                  <input type='email' placeholder='Email'required ref={nameRef}/>
                </div>
                <div className="form__group">
                  <input type='password' placeholder='password' required ref={passwordRef}/>
                </div>
                <button className='add mt-4' type='submit'>Login</button>
              </form>
              <Link to='/register'>Dont have an account? Create an account</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login