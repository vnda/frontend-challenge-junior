import * as React from 'react'
import PropTypes from 'prop-types'

import "./button.scss"

const CallToActionBtn = ({ children, buttonLink }) => {

    return(
        <>
            <button className="call-to-action" type="button" href={buttonLink}>{children}</button>
        </>
    )
}

CallToActionBtn.propTypes = {
    children: PropTypes.string.isRequired,
    buttonLink: PropTypes.string
}

export default CallToActionBtn