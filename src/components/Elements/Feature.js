import React from 'react'

const Feature = ({  className, textClassName, text, icon, style, textStyle}) => {
    return (
        <div className={`px-2 ${className}`} style={style}>
           <img className="w-20 mx-auto" style={{filter: 'invert(1)'}} src={icon.file.url} alt={icon.title} />
            <p style={textStyle} className={`my-4 ${textClassName}`}> 
            { text }
            </p>
        </div>
    )
}


Feature.defaultProps = {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: {
        file: {
            url: "./"
        },
        title: "Icon default"
    }
}
Feature.propTypes = {

}

export default Feature
