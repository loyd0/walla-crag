import React from 'react'

import { Login, Header, CarouselSection, Featured } from "@cms"





// Assign content
const contentType = (parts) => ({
    ContentfulContent: parts.filter(part => part.internal.type === "ContentfulContent"),
    ContentfulCarousel: parts.filter(part => part.internal.type === "ContentfulCarousel"),
    ContentfulList: parts.filter(part => part.internal.type === "ContentfulList"),
    original: parts
})


const sectionTypes = {
    "Header": (props) => <Header key={props.name} {...props} />,
    "Image and Text": (props) => <CarouselSection key={props.name} {...props} />,
    "Feature List":  (props) => <Featured key={props.name} {...props} />,
    "Central": () => { },
    "Panels": () => { },
    "Carousel": () => { },
    "Login":  (props) => <Login key={props.name} {...props} />,

}

const sectionParser = (section) => {
    // Segment section data
    const { backgroundImage, scrollToId, type, name } = section
    // Assign content to parts
    const parts = contentType(section.parts)

    return sectionTypes[type]({ parts, backgroundImage, scrollToId, type, name})
}



export default sectionParser
