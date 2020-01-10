import React, { useState} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Nav = ({links, logo, className}) => {


    const [ showMenu, setShowMenu ] = useState(false)
    return (
        <nav className={`flex justify-between max-w-5xl mx-auto items-center ${className}`}>
            <img src={logo} className="h-10 m-0 ml-4 inline"/>
            <ul className="md:flex justify-end m-0 hidden">
                {links.map(link => <li key={link.text} className="mr-4 m-0"> <a href={link.linkTo}>{link.text}</a>  </li>) } 
            </ul>


            <i className={`md:hidden mr-10 text-3xl fa text-black z-10 ${showMenu ? "fa-times" : "fa-bars"}`} onClick={() => setShowMenu(!showMenu)}></i>

                    <div className="fixed transition flex flex-col top-0 bg-white py-12 min-h-screen text-blue-700"
                        style={{
                            width: showMenu ? '50%' : '0%',
                            minWidth: showMenu ? 300 : 0,
                            right: showMenu ? 0 : '-50%',
                            transition: '1s',
                            // opacity: showMenu ? 1 : 0,
                        }}
                    
                    >
                        {
                        links.map(link => <Link
                        key={link.text} 
                        className="m-4 m-0" 
                            onClick={() => setShowMenu(false)}
                        to={link.linkTo}>
                            {link.text}
                        </Link>)
                        } 
                    </div> 

        </nav>
    )
}


Nav.defaultProps = {
    className: "text-white py-8"
}

Nav.propTypes = {

}

export default Nav
