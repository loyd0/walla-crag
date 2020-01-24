import React from 'react'
import { Button } from "@elements"
import Section from "@sections"


const Login = ({ backgroundImage, parts: { ContentfulContent }}) => {
    const { title, description, callToAction } = ContentfulContent[0]
    return ( <Section
        gradient
        images={backgroundImage}
    >
        <div className="z-20 absolute w-full px-2 ">
            <div className="text-center w-full px-8 max-w-2xl mx-auto bg-primary-transparent py-12 shadow-2xl">
                <h1 className="inline-block font-bold w-full ">{title}</h1>
                <div className="flex flex-col mt-4 max-w-sm mx-auto px-2" >
                    <p>{description.description}</p>
                    <input className="block mx-auto  w-full h-10 mt-4 mb-1 text-primary text-center" type="text" placeholder="Enter password..." ></input>
                    <Button className="hover:text-grey-200">{callToAction.text}</Button>
                </div>
            </div>
        </div>
   </Section> ) }

export default Login