import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
// https://github.com/g787543/infinite-react-carousel
import Slider from 'infinite-react-carousel';

const Carousel = ({ images }) => {

    const imagesArray = images.map(image => image.fluid)
    return (
        <Slider
            className="w-full h-full"
            dots={true}
            nextArrow={<div><i className="fa fa-chevron-right text-4xl text-secondary hover:text-primary hover:cursor-pointer" /></div>}
            prevArrow={<div><i className="fa fa-chevron-left text-4xl text-secondary hover:text-primary hover:cursor-pointer" /></div>}
            dotsClass="z-10 carousel-dots relative bottom-0" >
            {imagesArray.map(image => <div className="w-full h-full">
                <Img className="h-50vh md:h-screen z-0 " fluid={image} />
            </div>)}
        </Slider>
    );
}

Carousel.propTypes = {

}

export default Carousel
