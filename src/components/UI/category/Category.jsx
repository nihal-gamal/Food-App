import React from 'react';
import { Container,Row,Col} from 'reactstrap';
import catImg01 from '../../../assets/images/category-01.png';
import catImg02 from '../../../assets/images/category-02.png';
import catImg03 from '../../../assets/images/category-03.png';
import catImg04 from '../../../assets/images/category-04.png';
import  '../../../styles/category.css';

const categoryData = [
    {
        display : 'Fastfood',
        imgUrl : catImg01
    },
    {
        display : 'Pizza',
        imgUrl : catImg02
    },
    {
        display : 'Asian Food',
        imgUrl : catImg03
    },
    {
        display : 'Row Meat',
        imgUrl : catImg04
    },
]

const Category = () => {
    return (
        <Container>
            <Row>
                {
                    categoryData.map((item,i)=>(
                        <Col lg='3' md='4' sm='6' xs='6' className='mb-4' key={i}>
                            <div className="category__item d-flex align-items-center gap-3">
                                <div className="category__img">
                                    <img src={item.imgUrl} alt='img'/>
                                </div>
                                <h6>{item.display}</h6>
                            </div>
                        </Col>
                    ))
                }
                
            </Row>
        </Container>
    )
}

export default Category