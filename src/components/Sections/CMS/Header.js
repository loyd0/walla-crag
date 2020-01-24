import React from 'react'
import Section from "@sections"


const Header = ({ backgroundImage, parts: { ContentfulContent }}) => {
    const { title, description, callToAction } = ContentfulContent[0]
    return (
        <Section
        gradient
        images={backgroundImage}>
        <div className="z-10 absolute w-full">
          <div className="z-10 text-center w-full px-8 max-w-2xl mx-auto">
            <h1 className="border-b-4 border-white inline-block font-bold w-full ">{title }</h1>
            <h2 className="text-2xl md:text-4xl text-shadow-xl mt-4 md:mt-2 font-bold">{description.description}</h2>
            {/* <Button className="hover:text-grey-200">{callToAction.text}</Button> */}

          </div>
        </div>

      </Section>
    )
}

export default Header
