import * as React from "react"
import PropTypes from "prop-types"

import { StaticImage } from "gatsby-plugin-image"

import './header.scss'

import Navbar from '../Navbar'
import NavIcons from '../NavIcons'

const Header = ({ siteTitle }) => (
  <header>
    <div className="nav-logo">
      <StaticImage
        src="../../images/logo.png"
        width={150}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
      />
    </div>
    <Navbar />
    <NavIcons />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
