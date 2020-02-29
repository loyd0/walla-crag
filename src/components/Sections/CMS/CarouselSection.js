import React from 'react'
import PropTypes from 'prop-types'
import Carousel from '../../Elements/Carousel'

const CarouselSection = ({ parts: { ContentfulContent, ContentfulCarousel }, parts }) => {

    const { title, description, callToAction } = ContentfulContent[0]
    const reverse = parts.original[0].internal.type === "ContentfulCarousel"
    return (
        <div className="w-full min-h-screen flex flex-col lg:flex-row flex-auto overflow-hidden">
            <div
                className={`w-full lg:w-1/3  ${!reverse ? "lg:order-1 order-2 bg-primary text-secondary xl:pl-0" : "bg-secondary order-2 text-primary xl:pl-16"} flex flex-col justify-center pr-8 pl-8  py-8 flex-grow`}>
                <h3 className={`mb-4 w-full xl:w-5/6 ${!reverse ? "lg:ml-auto  lg:text-left mx-auto" : "lg:mr-auto mx-auto"}  block max-w-md`}>
                    {title}
                </h3>
                <p className={`w-full xl:w-5/6 ${!reverse ? "lg:ml-auto lg:text-left mx-auto" : "lg:mr-auto mx-auto lg:text-left"} max-w-md`}
                >
                    {description.description}
                </p>
            </div>
            <div
                className={` ${!reverse ? "lg:order-2" : "order-1"} lg:w-2/3 w-full h-50vh lg:h-inherit overflow-hidden lg:max-h-screen`}
            >
                { ContentfulCarousel.length > 0 ? <Carousel 
                    images={ContentfulCarousel[0].images}
                /> : "" }
            </div>
        </div>
    )
}


CarouselSection.defaultProps = {
    parts: {
        ContentfulContent: {
            title: "Default Title",
            description: "Default description"
        }
    }
}

CarouselSection.propTypes = {

}

export default CarouselSection
