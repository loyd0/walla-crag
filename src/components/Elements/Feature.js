import React from 'react'
import PropTypes from 'prop-types'

const Feature = ({ iconClassName, className, textClassName, text, icon}) => {
    return (
        <div className={`mx-2 px-2 ${className}`}>
            <i className={`fa text-5xl md:text-6xl ${icon} ${iconClassName}`}> </i>
            <p className={`my-4 text-justify ${textClassName}`}> 
            { text }
            </p>
        </div>
    )
}


Feature.defaultProps = {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "fa-location-arrow"
}
Feature.propTypes = {

}

export default Feature
