import React from 'react'
import Section from "@sections"
import { Button } from '@elements'


const Header = ({ backgroundImage, parts: { ContentfulContent }}) => {
    const { title, description, callToAction } = ContentfulContent[0]
    return (
        <Section
        gradient
        images={backgroundImage}>
        <div className="z-10 absolute w-full">
          <div className="z-10 text-center w-full px-8 max-w-3xl mx-auto">
            <h1 className="border-b-4 border-white inline-block font-bold w-full ">{title }</h1>
            <h2 className="text-2xl md:text-4xl text-shadow-xl mt-4 md:mt-2 ">{description.description}</h2>

            { callToAction ? 
             <Button linkTo={callToAction.linkTo} className="hover:text-grey-200 mt-2">{callToAction.text}</Button> : "" }
           

          </div>
        </div>

      </Section>
    )
}

export default Header
