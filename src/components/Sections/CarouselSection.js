import React from 'react'
import PropTypes from 'prop-types'

const CarouselSection = ({ images, header, description }) => {
    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row">
            <div className="w-full md:w-1/3  md:order-1 order-2 bg-primary text-secondary flex flex-col justify-center pr-8 pl-8 xl:pl-0 py-8 ">
                <h3 className="mb-4 w-full xl:w-5/6 ml-auto block max-w-md">{header}</h3>
                {description.map(text => <p className="w-full xl:w-5/6 ml-auto max-w-md" key={text}> {text}</p>)}
            </div>
            <div className="md:order-2 order-1 md:w-2/3 w-full" style={{ height: '30vh' }}>
        text
            </div>
        </div>
    )
}


CarouselSection.defaultProps = {
    header: "Basic Header",
    description: [ "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.", "With another line of text here."]

}

CarouselSection.propTypes = {

}

export default CarouselSection
