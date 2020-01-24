import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Nav from '@components/Nav'

const Header = ({ logo, items }) => {
  return (
    <header
      style={{
        marginBottom: `1.45rem`,
        position: 'fixed',
        zIndex: 10,
        width: '100%'
      }}
    >
      <Nav 
        className="text-secondary"
        logo={logo} 
        links={items}
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
