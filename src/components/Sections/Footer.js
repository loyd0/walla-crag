import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@elements'
import { Link } from 'gatsby'

const Footer = ({ logo }) => {
    return (
        <footer className="text-center text-base pt-12 bg-primary text-white">
            <div className="flex md:flex-row flex-col">
                <div className="flex flex-col w-full md:w-1/2 justify-center my-12 md:my-0">
                    <Link to="/"><img src={logo} className="h-10 m-0 ml-4 inline" /></Link>
                    <Button secondary className="w-40 mx-auto mt-8"> Book now </Button>
                </div>
                <div className="flex flex-row w-full md:w-1/2 py-4">
                    <div className="w-full md: w-/12 text-left px-16">
                        <Link className="w-full block hover:text-yellow-400" to="/#flat">The Flat</Link>
                        <Link className="w-full block hover:text-yellow-400" to="/#features">Features</Link>
                        <Link className="w-full block hover:text-yellow-400" to="/#availability">Availability</Link>
                        <Link className="w-full block hover:text-yellow-400" to="/#reviews">Reviews</Link>
                    </div>
                    <div className="w-full md: w-/12 text-left">
                        <Link className="w-full block hover:text-yellow-400" to="/keswick">Keswick</Link>
                        <Link className="w-full block hover:text-yellow-400" to="/friends">Friends</Link>
                    </div>
                </div>
            </div>
            <div className="text-sm flex flex-col justify-end mt-12">
                <a href="https://instagram.com/wallacrag" target="_blank" rel="noopener noreferrer"></a><i className="fab fa-instagram text-3xl my-3" /> 
                <p>
                    <a href="https://antler.digital" target="_blank" rel="noopener noreferrer"> Designed and built by <span className="underline hover:text-yellow-400">Antler Digital</span> </a>
                </p>

                <p className="mb-2">
                    Copy Right © Walla Crag {new Date().getFullYear()}
                </p>
            </div>


        </footer>
    )
}

Footer.propTypes = {

}

export default Footer
