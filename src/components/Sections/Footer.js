import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@elements'
import { Link } from 'gatsby'

const Footer = ({ logo, items }) => {
    return (
        <footer className="text-center text-base pt-12 bg-primary text-white">
            <div className="flex md:flex-row flex-col">
                <div className="flex flex-col w-full md:w-1/2 justify-center my-12 md:my-0">
                    <Link to="/"><img src={logo} className="h-10 m-0 ml-4 inline" /></Link>
                    <Button secondary className="w-40 mx-auto mt-8"> Book now </Button>
                </div>
                <div className="flex flex-row w-full md:w-1/2 py-4">
                    <div className="w-full md: w-/12 text-left px-16">
                        {items.filter(item => item.linkTo.includes("#")).map(item => {
                            return <Link key={item.text} className="w-full block hover:text-yellow-400" to={item.linkTo}>{item.text}</Link>
                        })}

                    </div>
                    <div className="w-full md: w-/12 text-left">
                    {items.filter(item => !item.linkTo.includes("#")).map(item => {
                            return <Link key={item.text} className="w-full block hover:text-yellow-400" to={item.linkTo}>{item.text}</Link>
                        })}
                    </div>
                </div>
            </div>
            <div className="text-sm flex flex-col justify-end mt-12">
                <a href="https://instagram.com/wallacrag" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram text-3xl my-3" /></a>
                <p>
                    <a href="https://antler.digital" target="_blank" rel="noopener noreferrer"> Designed and built by <span className="underline hover:text-yellow-500">Antler Digital</span> </a>
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
