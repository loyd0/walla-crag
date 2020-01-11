import React from 'react'
import PropTypes from 'prop-types'

const Feature = ({ iconClassName, className, textClassName, text, icon, style, textStyle}) => {
    return (
        <div className={`px-2 ${className}`} style={style}>
            <i className={`fa text-5xl md:text-6xl ${icon} ${iconClassName}`}> </i>
            <p style={textStyle} className={`my-4 ${textClassName}`}> 
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
