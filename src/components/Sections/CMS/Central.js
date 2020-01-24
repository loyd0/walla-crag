import React from 'react'
import Section from "@sections"
import { Feature } from '@elements'


const Central = ({ backgroundImage, scrollToId, parts: { ContentfulContent, ContentfulList } }) => {
    const { title, description, callToAction } = ContentfulContent[0]
    const { items, type } = ContentfulList.length > 0 ? ContentfulList[0] : {}
    return (
        <Section
            scrollToId={scrollToId}
            overlay={0.25}
            images={backgroundImage}>
            <div className="absolute z-10 text-center w-full px-4 py-6 max-w-3xl self-center">
                <h2 className="inline-block font-bold ">{title}</h2>
                <p className="text-center">{ description.description} </p>
                <div className="flex mt-8 flex-col md:flex-row">
                    { 
                        type && type.toLowerCase() === "feature" ? 
                            items.map(({icon, text}) => {
                                return <Feature text={text} icon={icon}  />
                            })  : "" 
                    }
                </div>
            </div>
        </Section>
    )
}

export default Central
