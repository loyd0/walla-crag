import React from 'react'
import Section from "@sections"
import {Card , Feature} from "@elements"

const Featured = ({ backgroundImage, scrollToId, parts: { ContentfulContent, ContentfulList }, parts }) => {
  const { title, description, callToAction } = ContentfulContent.length > 0 ? ContentfulContent[0] : {}
  const { items, type } = ContentfulList[0]
  return (
    <Section
      overlay={0.2}
      className="min-h-screen bg-blue-gradient text-secondary text-center flex flex-col justify-around py-12"
      scrollToId={scrollToId}
      images={backgroundImage}
    >
      <h2 className="z-10 mt-8 md:mb- 0" > {title} </h2>

      {description ? 
        <h3 className="text-xl md:text-2xl text-shadow-xl mt-4 md:mt-2 font-bold">{description.description} </h3>
        : ""}

      <div className=" z-10 flex flex-col justify-center py-6">
        <div className="flex flex-initial flex-wrap md:px-4 p-1 max-w-5xl mx-auto justify-center ">
          {/* Needs to select what time of thing is being iterated through */}
          {
            items.map(({ title, description, difficulty, distance, cost, time, icon, text }, index) => {
              return type.toLowerCase() === "card" ? <Card
              key={description + index}
              title={title}
              description={description}
              icons={[difficulty, time, distance, cost].filter(icon => typeof icon !== 'undefined')}
              img={icon}
              light
              style={{ maxWidth: '15rem' }}
              className="h-full p-1 md:p-2 "
          /> : <Feature
              key={text}
              className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 my-2"
              text={text}
              icon={icon}
          />
            })
          }
        </div>
      </div>

    </Section>
  )
}

export default Featured
