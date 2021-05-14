import * as React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

import './avatar-row.scss'

const AvatarRow = () => {
    return (
        <section className="container">
            <div class="avatar-row">
                <StaticImage
                className="avatar-icon"
                src="../../images/avatar/150x150.png" />
                <StaticImage
                className="avatar-icon"
                src="../../images/avatar/150x150.png" />
                <StaticImage
                className="avatar-icon"
                src="../../images/avatar/150x150.png" />
                <StaticImage
                className="avatar-icon"
                src="../../images/avatar/150x150.png" />
                <StaticImage
                className="avatar-icon"
                src="../../images/avatar/150x150.png" />
                <StaticImage
                className="avatar-icon"
                src="../../images/avatar/150x150.png" />
            </div>
        </section>
    )
}


export default AvatarRow