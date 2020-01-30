import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

import Nav from '@components/Nav'

const Header = ({ logo, items }) => {


  const [showMenu, setShowMenu] = useState(true)
  const [direction, setDirection] = useState(false)


  const showMenuStyle = {
    top: 0,
  }

  const hideMenuStyle = {
    top: -100
  }

  let prevScroll = window.pageYOffset

  const scrollTrack = (event) => {
    const scroll = window.pageYOffset
    if ((scroll > prevScroll) !== direction) {
      setDirection(scroll > prevScroll)
    }
    prevScroll = scroll
  }


  useEffect(() => {
    window.onscroll = scrollTrack
    return () => {
      window.onscroll = null
    };
  }, [direction])

  


  return (
    <header
      style={{
        marginBottom: `1.45rem`,
        position: 'fixed',
        zIndex: 10,
        width: '100%',
        transition: '1s',
        ...!direction ? showMenuStyle : hideMenuStyle
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
