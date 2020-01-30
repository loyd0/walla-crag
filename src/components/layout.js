import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Footer } from '@components/Sections'
import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allContentfulLogo {
        edges {
          node {
            id
            logo {
              file {
                url
                fileName
                contentType
              }
            }
            name
          }
        }
      }
      contentfulNav(id: {eq: "fd8c3bd4-23a5-59c6-96f9-beae4c72da9d"}) {
        items {
          linkTo
          text
        }
      }
    }
  `)

  const items = data.contentfulNav.items
console.log('items', items)
  return (
    <>
      <Header
        logo={data.allContentfulLogo.edges[1].node.logo.file.url}
        items={items}
      />
      <div
        className="mx-auto bg-primary "
      >
        <main className="min-h-screen relative z-0 ">{children}</main>
        <Footer
          logo={data.allContentfulLogo.edges[1].node.logo.file.url}
          items={items} 
        />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
