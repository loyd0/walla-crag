import React from 'react'
import PropTypes from 'prop-types'
import sectionParser from '../../functions/CMSParser'

const SectionCreator = ({nodes}) => {
    if (nodes.length > 0)  {
        if ( nodes[0].sections.length > 0 ) {
            return  nodes[0].sections.map(section => sectionParser(section))
        }
        return <div className="mx-auto max-w-3xl h-48">
        <h3>No sections provided. Please make sure the page is rendering correctly.</h3>
    </div>
    }
    return <div className="mx-auto max-w-3xl h-48">
        <h3>No nodes provided.</h3>
    </div>
    
}

SectionCreator.propTypes = {
    nodes: PropTypes.array
}

export default SectionCreator
