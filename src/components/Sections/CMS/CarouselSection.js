import React from 'react'
import PropTypes from 'prop-types'
import Carousel from '../../Elements/Carousel'

const CarouselSection = ({ parts: { ContentfulContent, ContentfulCarousel }, parts }) => {

    const { title, description, callToAction } = ContentfulContent[0]
    const reverse = parts.original[0].internal.type === "ContentfulCarousel"
    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row flex-auto">
            <div
                className={`w-full md:w-1/3  ${!reverse ? "md:order-1 order-2 bg-primary text-secondary xl:pl-0" : "bg-secondary order-2 text-primary xl:pl-16"} flex flex-col justify-center pr-8 pl-8  py-8 flex-grow`}>
                <h3 className={`mb-4 w-full xl:w-5/6 ${!reverse ? "md:ml-auto  md:text-left mx-auto" : "md:mr-auto mx-auto"}  block max-w-md`}>
                    {title}
                </h3>
                <p className={`w-full xl:w-5/6 ${!reverse ? "md:ml-auto md:text-left mx-auto" : "md:mr-auto mx-auto md:text-left"} max-w-md`}
                >
                    {description.description}
                </p>
            </div>
            <div
                className={` ${!reverse ? "md:order-2" : "order-1"} md:w-2/3 w-full h-50vh md:h-inherit`}
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
