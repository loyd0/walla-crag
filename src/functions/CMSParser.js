import React from 'react'
import { Login, Header, CarouselSection, Featured, Central, Review, Panes, Availability } from "@cms"

// Assign content
const contentType = (parts) => ({
    ContentfulContent: parts.filter(part => part && part.internal && part.internal.type === "ContentfulContent"),
    ContentfulCarousel: parts.filter(part => part && part.internal && part.internal.type === "ContentfulCarousel"),
    ContentfulContentCarousel: parts.filter(part => part && part.internal && part.internal.type === "ContentfulContentCarousel"),
    ContentfulList: parts.filter(part => part && part.internal && part.internal.type === "ContentfulList"),
    ContentfulPanel: parts.filter(part => part && part.internal && part.internal.type === "ContentfulPanel"),
    ContentfulCalendar: parts.filter(part => part && part.internal && part.internal.type === "ContentfulCalendar"),
    original: parts
})


const sectionTypes = {
    "Header": (props) => <Header key={props.name} {...props} />,
    "Image and Text": (props) => <CarouselSection key={props.name} {...props} />,
    "Feature List":  (props) => <Featured key={props.name} {...props} />,
    "Central": (props) => <Central key={props.name} {...props} />,
    "Panels": (props) => <Panes key={props.name} {...props} />,
    "Carousel": (props) => <Review key={props.name} {...props} />,
    "Login":  (props) => <Login key={props.name} {...props} />,

}

const sectionParser = (section) => {
    // Segment section data
    const { backgroundImage, scrollToId, type, name } = section
    // Assign content to parts
    const parts = contentType(section.parts)
    return sectionTypes[type]({ parts, backgroundImage, scrollToId, type, name })
}



export default sectionParser
