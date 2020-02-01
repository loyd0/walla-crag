import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

import Nav from '@components/Nav'


const awaitWindow = typeof window !== 'undefined' ? window : {}

const Header = ({ logo, items }) => {


  const [showMenu, setShowMenu] = useState(true)
  const [direction, setDirection] = useState(false)


  const showMenuStyle = {
    top: 0,
  }

  const hideMenuStyle = {
    top: -100
  }

  let prevScroll = awaitWindow.pageYOffset

  const scrollTrack = (event) => {
    const scroll = awaitWindow.pageYOffset
    if ((scroll > prevScroll) !== direction) {
      setDirection(scroll > prevScroll)
    }
    prevScroll = scroll
  }


  useEffect(() => {
    awaitWindow.onscroll = scrollTrack
    return () => {
      awaitWindow.onscroll = null
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
