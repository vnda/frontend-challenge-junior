import * as React from 'react'
import PropTypes from 'prop-types'

import './text-area.scss'

const TextArea = ({ subtitle, title, children }) => {

    return (
        <div className="text-area-wrapper">
            <p className="subtitle">{subtitle}</p>
            <h1>{title}</h1>
            <p className="text">{children}</p>
        </div>
    )
}

TextArea.propTypes = {
    subtitle: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node,
}

export default TextArea