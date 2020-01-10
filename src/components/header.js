import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import {Img} from 'gatsby-image'

import Nav from '@components/Nav'

const Header = ({ siteTitle }) => {

  const data = useStaticQuery(graphql`
    query Logos {
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
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <Nav 
        logo={data.allContentfulLogo.edges[1].node.logo.file.url} 
        links={data.contentfulNav.items}
      />
    </header>
  )

}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}



export default Header
