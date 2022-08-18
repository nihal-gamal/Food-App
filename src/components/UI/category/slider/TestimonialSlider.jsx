import React from 'react'
import Slider from "react-slick";
import avt01 from '../../../../assets/images/ava-1.jpg'
import avt02 from '../../../../assets/images/ava-2.jpg'
import avt03 from '../../../../assets/images/ava-3.jpg'
import '../../../../styles/slider.css'

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide:true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    return (
        <Slider {...settings}>
            <div >
            <p className="review__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint incidunt aut vel illum laudantium dolorem corrupti laboriosam possimus magnam culpa!
            </p>
            <div className='slider__content d-flex align-items-center gap-3'>
            <img src={avt01} alt='img' className=' rounded'/>
            <h6>John Doe</h6>
            </div>
        </div>
        <div >
            <p className="review__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint incidunt aut vel illum laudantium dolorem corrupti laboriosam possimus magnam culpa!
            </p>
           <div className='slider__content d-flex align-items-center gap-3'>
           <img src={avt02} alt='img' className=' rounded'/>
            <h6>Mitchell Marsh</h6>
           </div>
        </div>
        <div >
            <p className="review__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint incidunt aut vel illum laudantium dolorem corrupti laboriosam possimus magnam culpa!
            </p>
           <div className='slider__content d-flex align-items-center gap-3'> <img src={avt03} alt='img' className=' rounded'/>
            <h6>Steven Crock</h6></div>
        </div>
        </Slider>
    )
}

export default TestimonialSlider