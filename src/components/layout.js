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
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} logo={data.allContentfulLogo.edges[1].node.logo.file.url} />
      <div
        className="mx-auto "
      >
        <main className="min-h-screen relative z-0 ">{children}</main>
       <Footer logo={data.allContentfulLogo.edges[1].node.logo.file.url} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
