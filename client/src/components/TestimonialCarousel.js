import { useState, useEffect } from "react";

import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';


const TestimonialCarousel = () => {
const [current, setCurrent] = useState(0);

    const testimonials = []; // data?.approvedTestimonials;
    const length = 0; // testimonials?.length || 0;

    const carouselScroll = () => {
        if(current === length - 1) {
            return setCurrent(0);
        }
        return setCurrent(current + 1);
    }

    useEffect(() => {
        const carouselInterval = setInterval(() => {carouselScroll()}, 10000)
        return () => clearInterval(carouselInterval);
    });



    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if(testimonials) {
        return (
        <div id="testimonial-slideshow">
                <FaArrowAltCircleLeft className="left-arrow" onClick={previousSlide} />
            {testimonials && testimonials.map((testimonial, index) => {
                return (
                    <div className={index === current ? 'slide-active' : 'slide'} key={index}>
                        <p>"{testimonial.body}"</p>
                        <h3>– {testimonial.name}</h3>
                    </div>
                )
            })}
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        </div>
        )
    } else {
        return ( <div>Loading...</div>)
    }
}

export default TestimonialCarousel;
// 
// 