import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import {Img} from 'gatsby-image'

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
    }
  `)


  console.log(data)
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <img src={data.allContentfulLogo.edges[1].node.logo.file.url}/>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
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
