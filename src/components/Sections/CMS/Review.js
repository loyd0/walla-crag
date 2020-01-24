import React from 'react'
import Section, { Carousel } from '@sections'

const Review = ({ scrollToId, backgroundImage, parts: { ContentfulContentCarousel } }) => {
    const { content } = ContentfulContentCarousel[0]
    return (
        <Section
            scrollToId={scrollToId}
            overlay={0.25}
            images={backgroundImage}>
            < Carousel content={content} />
        </Section>
    )
}

export default Review
