import * as React from 'react'
import Image from '../Image'
import PropTypes from 'prop-types'

import './card.scss'

const Card = ({ imgFileName, bannerTitle, children }) => {

    const cardImg = imgFileName

    return(
        <div className="card">
            <Image imgFileName={cardImg} imgAlt="card img" />
            <div className="card-content">
                <p className="card-title">{bannerTitle}</p>
                <p className="card-text">{children}</p>
            </div>
        </div>

    )
}

Card.propTypes = {
    imgFileName: PropTypes.string,
    bannerTitle: PropTypes.string,
    children: PropTypes.string,
}

export default Card