import React from 'react'
import Section from "@sections"
import { Feature, Button } from '@elements'
import Availability from './Availability'


const Central = ({ backgroundImage, scrollToId, parts: { ContentfulContent, ContentfulList, ContentfulCalendar } }) => {
    const { title, description, callToAction, callToAction2 } = ContentfulContent[0]
    const { url } = ContentfulCalendar.length > 0 ? ContentfulCalendar[0] : {}
    const { items, type } = ContentfulList.length > 0 ? ContentfulList[0] : {}

    return (
        <Section
            scrollToId={scrollToId}
            overlay={0.25}
            images={backgroundImage}
        >
            <div className="z-10 text-center w-full px-4 py-12 max-w-3xl self-center">
                <h2 className="inline-block font-bold ">{title}</h2>
                <p className="text-center">{description.description} </p>
                <div className="flex mt-8 flex-col md:flex-row">
                    {
                        type && type.toLowerCase() === "feature" ?
                            items.map(({ icon, text }, index) => {
                                return <Feature key={text + index} text={text} icon={icon} />
                            }) : ""
                    }
                    {
                        ContentfulCalendar && url ?
                            <Availability /> : ""
                    }
                   
                </div>
                {callToAction ?
                        <Button linkTo={callToAction.linkTo} secondary={true} className="hover:text-grey-200 mt-4">{callToAction.text}</Button> : ""}
                {callToAction2 ?
                        <Button linkTo={callToAction2.linkTo} className="hover:text-grey-200 mt-4 md:ml-4">{callToAction2.text}</Button> : ""}
            </div>
        </Section>
    )
}

export default Central
