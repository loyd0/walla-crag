import React from 'react'
import Layout from '@components/layout'

import Section, { CarouselSection } from "@components/Sections"
import {  Card } from '@elements'
import SEO from '../components/seo'




const match = (node, name) => { 
  const regex = RegExp(name);
  return regex.test(node.fluid.originalName)
}

const walks = [
  {
    title: "Walla Crag",
    desc: "The name stake walk with stunning views.",
    icons: [
      "⛰⛰⛰",
      "🕰🕰"
    ]
  },
  {
    title: "Pub 2 Pub",
    desc: "Involving pubs at both ends.",
    icons: [
      "⛰",
      "🕰🕰🕰"
    ]
  },
  {
    title: "Helvellen",
    desc: "A classic hike for regular explorers.",
    icons: [
      "⛰⛰⛰⛰",
      "🕰🕰🕰🕰"
    ]
  },
  {
    title: "Scarfell Pike",
    desc: "The big one, the bucket list.",
    icons: [
      "⛰⛰⛰⛰⛰",
      "🕰🕰🕰🕰🕰"
    ]
  },
  {
    title: "Train Tracks",
    desc: "A great introductory walk.",
    icons: [
      "⛰",
      "🕰🕰🕰"
    ]
  },
  {
    title: "Lake Lapping",
    desc: "Stunning views, easy amble.",
    icons: [
      "⛰",
      "🕰🕰🕰"
    ]
  },

]

const activities = [
  {
    title: "Distillery Tour",
    desc: "Stunning views, easy amble.",
    icons: [
      "💷",
      "🚗"
    ]
  },
  {
    title: "Distillery Tour",
    desc: "Stunning views, easy amble.",
    icons: [
      "💷",
      "🚗"
    ]
  },
  {
    title: "Distillery Tour",
    desc: "Stunning views, easy amble.",
    icons: [
      "💷",
      "🚗"
    ]
  },
  {
    title: "Distillery Tour",
    desc: "Stunning views, easy amble.",
    icons: [
      "💷",
      "🚗"
    ]
  },
  {
    title: "Distillery Tour",
    desc: "Stunning views, easy amble.",
    icons: [
      "💷",
      "🚗"
    ]
  },
  {
    title: "Distillery Tour",
    desc: "Stunning views, easy amble.",
    icons: [
      "💷",
      "🚗"
    ]
  },
]


const keswick = ({ data }) => {
  return (
    <Layout>
      <SEO title="Keswick and the Lakes" />
      <Section
        gradient
        images={data.allImageSharp.edges.filter(({ node }) => node.fluid.originalName === "sunset.jpg")
        }>
        <div className="z-10 absolute w-full">
          <div className="z-10 text-center w-full px-8 max-w-2xl mx-auto">
            <h1 className="border-b-4 border-white inline-block font-bold w-full ">Keswick</h1>
            <h2 className="text-2xl md:text-4xl text-shadow-xl mt-4 md:mt-2 font-bold">The heart of the Lake District</h2>
          </div>
        </div>

      </Section>
      <CarouselSection
        header="The Town"
        description={["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "Photos of the town"]}
        images={data.allImageSharp.edges.filter(({ node }) => match(node, "keswick-1.jpg") || match(node, "keswick-2.jpg") || match(node, "keswick-3.jpg"))}
      />
      <CarouselSection
        reverse={true}
        header="The Lake District"
        description={["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "Photos of the lakes"]}
        images={data.allImageSharp.edges.filter(({ node }) => match(node, "lakes-1.jpg") || match(node, "lakes-2.jpg") || match(node, "lakes-3.jpg") || match(node, "lakes-4.jpg") || match(node, "lakes-5.jpg"))}
      />

      {/* Walks */}
      <Section
      overlay={0.2}
        className="min-h-screen bg-blue-gradient text-secondary text-center flex flex-col justify-around py-12"
        images={data.allImageSharp.edges.filter(({ node }) => node.fluid.originalName === "cairn.jpg")
        }

      >
        <h2 className="z-10 my-8 md:mb- 0" > Our Favourite Walks </h2>

        <div className=" z-10 flex flex-col justify-center py-6">
          <div className="flex flex-initial flex-wrap md:px-4 p-1 max-w-5xl mx-auto justify-center ">

            {
              walks.map(({ title, desc, icons }, index) => <Card
                key={desc + index}
                title={title}
                desc={desc}
                icons={icons}
                style={{maxWidth: '15rem'}}
                className="h-full p-1 md:p-2 "
              />)
            }
          </div>
        </div>

      </Section>
      {/* Activities */}
      <Section
      overlay={0.2}
        className="min-h-screen bg-blue-gradient text-secondary text-center flex flex-col justify-around py-12"
        images={data.allImageSharp.edges.filter(({ node }) => node.fluid.originalName === "barrels-min.jpg")
        }

      >
        <h2 className="z-10 my-8 md:mb- 0" > Our favourite activities </h2>

        <div className=" z-10 flex flex-col justify-center py-6">
          <div className="flex flex-initial flex-wrap md:px-4 p-1 max-w-5xl mx-auto justify-center ">

            {
              activities.map(({ title, desc, icons }, index) => <Card
                light
                key={desc + index}
                title={title}
                desc={desc}
                icons={icons}
                style={{maxWidth: '15rem'}}
                className="h-full p-1 md:p-2 "
              />)
            }
          </div>
        </div>

      </Section>

    </Layout>
  )
}


export const keswickQuery = graphql`
  query keswickQuery {
  allImageSharp {
    edges {
      node {
          # Specify a fluid image and fragment
          # The default maxWidth is 800 pixels
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
            originalName
          }
      }
    }
  }
}
`


export default keswick
