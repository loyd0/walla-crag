import React from 'react'
import Layout from '@components/layout'

import Section, { CarouselSection } from "@components/Sections"
import { Button } from '@elements'
import SEO from '../components/seo'

const friends = ({data}) => {
    return (
        <Layout>
            <Section
                gradient
                images={data.allImageSharp.edges.filter(({ node }) => node.fluid.originalName === "bookcase-walla.jpg")}
                
                >
                <div className="z-20 absolute w-full px-2 ">
                    <div className="text-center w-full px-8 max-w-2xl mx-auto bg-primary-transparent py-12 shadow-2xl">
                        <h1 className="inline-block font-bold w-full ">Friends of Walla</h1>
                        <div className="flex flex-col mt-4 max-w-sm mx-auto px-2" > 
                        <p>Like a good book you can’t wait to share. Use the password we have provided you to log in.</p>
                            <input className="block mx-auto  w-full h-10 mt-4 mb-1 text-primary text-center" type="text" placeholder="Enter password..." ></input>
                            <Button  className="hover:text-grey-200">Login</Button>
                        </div>  
                    </div>
                </div>

            </Section>
        </Layout>
    )
}


export const FriendsQuery = graphql`
  query FriendsQuery {
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


export default friends
