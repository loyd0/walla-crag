import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section, { CarouselSection } from "@components/Sections"
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import {Button, Feature} from '@elements'

const IndexPage = ({data }) => (
  <Layout>
    <SEO title="Home" />
    <Section 
    gradient
    images={data.allImageSharp.edges.filter(({ node }) => node.fluid.originalName === "landscape-lakes-min.jpg")
    }>
      <div className="absolute z-10 text-center w-full px-8">
        <h1 className="border-b-4 border-white inline-block font-bold ">Your Escape in the Lakes</h1>
        <h2 className="text-2xl md:text-4xl text-shadow-xl mt-4 md:mt-2">A peaceful retreat in the center of Keswick</h2>
        <Button className="mt-4"> Discover Walla</Button>
      </div>
      

    </Section>
    <Section 
    overlay={0.25}
    images={data.allImageSharp.edges.filter(({ node }) => node.fluid.originalName === "buildings-min.jpg")
    }>
      <div className="absolute z-10 text-center w-full px-4 max-w-3xl self-center">
        <h2 className="inline-block font-bold ">The Flat</h2>
        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

        <div className="flex mt-8 flex-col md:flex-row">
            <Feature iconClassName=""/>
            <Feature icon="fa-user" />
        </div>
        
      </div>
      

    </Section>
    <CarouselSection 
    overlay={0.25}
    images={data.allImageSharp.edges.filter(({ node }) => node.fluid.originalName === "buildings-min.jpg")
    }>
      <div className="absolute z-10 text-center w-full px-4 max-w-3xl self-center">
        <h2 className="inline-block font-bold ">The Flat</h2>
        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

        <div className="flex mt-8 flex-col md:flex-row">
            <Feature iconClassName=""/>
            <Feature icon="fa-user" />
        </div>
        
      </div>
      

    </CarouselSection>
  </Layout>
)


export const IndexQuery = graphql`
  query MyQuery {
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

export default IndexPage
