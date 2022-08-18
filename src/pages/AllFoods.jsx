import React ,{ useState,useEffect }from 'react';
import CommonSection from '../components/UI/common-section/CommonSection';
import Helmet from './../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import products from '../assets/fake-data/products';
import ProductCard from './../components/UI/category/product-card/ProductCard';
import '../styles/all-foods.css';
import ReactPaginate from 'react-paginate';


function AllFoods() {
  const [searchTerm, setSearchTerm] = useState('')
  const [data, setData] = useState([]);
  const searchedProduct = data.filter((item) => {
    if(item.title.toLowerCase().includes(searchTerm.toLowerCase())){
      return item
  }})
  const [pageNum, setPageNum] = useState(0)
  const productPerPage = 8
  const visitedPage = pageNum * productPerPage
  const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage)
  const pageCount = Math.ceil(searchedProduct.length / productPerPage)
  const changePage = ({selected})=>{
    setPageNum(selected)
  }
  
  const [sortType, setSortType] = useState('');
  useEffect(() => {
    const sortArray = type => {
      const types = {
        default:'',
        title: 'title',
        price: 'price',
      };
      const sortProperty = types[type];
      const sorted = [...products].sort((a, b) => a[sortProperty] === b[sortProperty] 
      ? 0 : b[sortProperty] > a[sortProperty] ? -1 : 1);
      console.log(sorted);
      setData(sorted);
    };
    sortArray(sortType);
    
  }, [sortType])
  

  

  
  return (
    <Helmet title='All-Foods'>
      <CommonSection title='All Foods'/>
      <section>
        <Container>
          <Row className='d-flex flex-wrap'>
            <Col lg='6' md='6' sm='6' className='mb-3'>
              <div className="search__widget d-flex align-items-center justify-content-between ">
                <input className='w-100' type='text' placeholder='im looking for...'
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}/>
                <span><i className='ri-search-line'></i></span>
              </div>
            </Col>
            <Col lg='6' md='6' sm='6' className='mb-5'>
              <div className="sorting__widget text-end">
                <select className='w-50' onChange={(e) => setSortType(e.target.value)}>
                  <option value=''>Sort By</option>
                  <option value='title' > A-Z</option>
                  <option value='price'>Low Price</option>
                  {/* <option value='high-price'>High Price</option>
                  <option value='low-price'>Low Price</option> */}
                </select>
              </div>
            </Col>
            {
              
              displayPage.map((item,i) =>(
                <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mb-4'>
                  <ProductCard  item={item}/>
                </Col>
              ))
            }
            <div>
              <ReactPaginate
              pageCount={pageCount}
              onPageChange={changePage}
              nextLabel="next"
              previousLabel="prev"
              containerClassName='paginationBtns'
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default AllFoods