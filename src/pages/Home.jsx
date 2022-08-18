import React ,{useState,useEffect}from 'react'
import Helmet from './../components/Helmet/Helmet';
import { Container,Row,Col, ListGroup, ListGroupItem} from 'reactstrap';
import heroImg from '../assets/images/hero.png'
import '../styles/home.css'
import { Link } from 'react-router-dom';
import Category from '../components/UI/category/Category';
import featuerImg01 from '../assets/images/service-01.png'
import featuerImg02 from '../assets/images/service-02.png'
import featuerImg03 from '../assets/images/service-03.png'
import ProductCard from '../components/UI/category/product-card/ProductCard';
import products from '../assets/fake-data/products';
import foodCatImg01 from '../assets/images/hamburger.png';
import foodCatImg02 from '../assets/images/pizza.png';
import foodCatImg03 from '../assets/images/bread.png';
import whyImg from '../assets/images/location.png'
import networkImg from '../assets/images/network.png'
import TestimonialSlider from '../components/UI/category/slider/TestimonialSlider';

const featureData=[
  {
    title:'Quick Delivery',
    imgUrl:featuerImg01,
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.adipisicing elit.'
  }, {
    title:'Super Dine In',
    imgUrl:featuerImg02,
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.adipisicing elit.'
  }, {
    title:'Easy Pick Up',
    imgUrl:featuerImg03,
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.adipisicing elit.'
  }
]
function Home() {
  const[category,setCategory]=useState('ALL')
  const[allProducts,setAllProducts]=useState(products)
  const[hotPizza,setHotPizza]=useState([])
  useEffect(() => {
    const filteredProducts=products.filter((item)=>item.category === 'Pizza')
    const slicedPizza = filteredProducts.slice(0,4)
    setHotPizza(slicedPizza)
  }, [])
  

  useEffect(() => {
    if(category === "ALL"){
      setAllProducts(products)
    }else if(category === "BURGER"){
      let filteredProducts=products.filter((item)=>item.category === 'Burger')
      // console.log(filteredProducts);
      setAllProducts(filteredProducts)
    }else if(category === "PIZZA"){
      let filteredProducts=products.filter((item)=>item.category === 'Pizza')
      // console.log(filteredProducts);
      setAllProducts(filteredProducts)
    }else if(category === "BREAD"){
      let filteredProducts=products.filter((item)=>item.category === 'Bread')
      // console.log(filteredProducts);
      setAllProducts(filteredProducts)
    }
  }, [category])
  return (
    <Helmet title='Home'>
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content">
                  <h5 className='mb-3 '>Easy way to make an order</h5>
                  <h1 className='mb-4 hero__title'><span>Hungry?</span> Just wait<br/> food at <span> your door</span></h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laborum aperiam odio officia quibusdam temporibus distinctio ea a vero in.</p>
                  <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                    <button className='order__btn d-flex align-items-center justify-content-between'>Order now
                    <i className='ri-arrow-right-s-line'></i></button>
                    <button className='all__foods__btn'><Link to='/foods'>see all foods</Link></button>
                  </div>
                  <div className='hero__service d-flex align-items-center gap-5 mt-5'>
                    <p className='d-flex align-items-center gap-2'>
                      <span className='shipping__icon'><i className='ri-car-line'></i></span>
                    <span>No shipping charge</span></p>
                    <p className='d-flex align-items-center gap-2'>
                      <span className='shipping__icon'><i className='ri-shield-check-line'></i></span>
                    <span>100% secure checkout</span></p>
                  </div>
                  </div>
            </Col>
            <Col lg='6' md='6'>
              <div className="hero__image">
                <img src={heroImg} alt='img' className='w-100'/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
      <Category/>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h5 className='feature__subtitle mb-4'>What we serve</h5>
              <h2 className='feature__title'>Just sit back at home</h2>
              <h2 className='feature__title'>we will <span>take care</span></h2>
              <p className='mb-1 mt-4 feature__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, fuga.</p>
              <p className='feature__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, repellendus.</p>
            </Col>
            {
              featureData.map((item,i)=>(
                  <Col lg='4' md='6' sm='6' key={i} className='mt-5'>
                    <div className="feature__item text-center px-5 py-3">
                      <img src={item.imgUrl} alt='img' className='w-25 mb-3 mb-3'/>
                      <h5 className='fw-bold'>{item.title}</h5>
                      <p>{item.desc}</p>

                    </div>
                  </Col>
              ))
            }

          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <h2 className='text-center'>Popular foods</h2>
            </Col>
            <Col lg='12'>
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button className={`all__btn ${category === "ALL"? "foodbtnActive" : ""}`}  onClick={()=> setCategory("ALL")}>All</button>
                <button className={`all__btn ${category === "BURGER" ? "foodbtnActive" : ""} ${'d-flex align-items-center gap-2'}`} onClick={()=> setCategory("BURGER")}><img alt='img' src={foodCatImg01}/>Burger</button>
                <button className={`all__btn ${category === "PIZZA" ? "foodbtnActive" : ""} ${'d-flex align-items-center gap-2'}`} onClick={()=> setCategory("PIZZA")}><img alt='img' src={foodCatImg02}/>Pizza</button>
                <button className={`all__btn ${category === "BREAD" ? "foodbtnActive" : ""} ${'d-flex align-items-center gap-2'}`} onClick={()=> setCategory("BREAD")}><img alt='img' src={foodCatImg03}/>Bread</button>
              </div>
            </Col>
            {
              allProducts.map((item,i)=>(
                <Col lg='3' md='4' sm='6' xs='6' key={i} className='mt-5'>
                  <ProductCard item={item}/>
                </Col>
              ))
            }
            
          </Row>
        </Container>
      </section>
      <section className='why'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <img className='w-100' src={whyImg} alt='img'/>
            </Col>
            <Col lg='6' md='6'>
              <div className="why__tasty">
                <h2 className='tasty__title mb-4'>
                  Why <span>Tasty Treat?</span>
                </h2>
                <p className='tasty__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia illo eligendi nam placeat ut doloribus enim expedita, totam dicta aspernatur repudiandae natus neque cumque doloremque veniam dolorum obcaecati facilis quaerat.</p>
                <ListGroup className='mt-4'>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose d-flex align-items-center gap-2'><i className='ri-checkbox-circle-line'></i>
                    Fresh and tasty foods</p>
                    <p className='choose__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, voluptate.</p>
                  </ListGroupItem>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose d-flex align-items-center gap-2'><i className='ri-checkbox-circle-line'></i>
                    Quality Support foods</p>
                    <p className='choose__desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, perferendis!</p>
                  </ListGroupItem>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose d-flex align-items-center gap-2'>
                    <i className='ri-checkbox-circle-line'></i>
                    Order from any location
                    </p>
                    <p className='choose__desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, perferendis!</p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 >Hot Pizza</h2>
            </Col>
            {
              hotPizza.map((item,i)=>(
                <Col lg='3' md='4' key={i}>
                  <ProductCard item={item}/>
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
          <Col lg='6' md='6'>
              <div className='testimonial '>
              <h5 className='testimonial__subtitle mb-4'>Testimonial</h5>
              <h2 className='testimonial__title mb-4'>What our <span>customers</span> are saying</h2>
              <p className='testimonial__desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati modi cum voluptates. Sint voluptatum laborum omnis error commodi ducimus eligendi!</p>
              <TestimonialSlider/>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <img src={networkImg} alt='img' className=' testimonial__img w-100'/>
            </Col>
            
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home