import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
// https://github.com/g787543/infinite-react-carousel
import Slider from '../../infinite-react-carousel';

const Carousel = ({ images }) => {

    const imagesArray = images.map(image => image.fluid)

    const NextArrow = (props)=> <div {...props} ><i className="fa  fa-chevron-right text-4xl text-secondary hover:text-primary hover:cursor-pointer" /></div>
    const PrevArrow = (props)=> <div {...props}><i className="fa fa-chevron-left text-4xl text-secondary hover:text-primary hover:cursor-pointer" /></div>


    return (
        <Slider
            className="w-full h-full"
            dots={true}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
            dotsClass="z-10 carousel-dots relative bottom-0" >
            {imagesArray.map((image, index) => <div key={index} className="w-full h-full">
                <Img className="h-50vh md:h-screen z-0 " fluid={image} />
            </div>)}
        </Slider>
    );
}

Carousel.propTypes = {

}

export default Carousel
