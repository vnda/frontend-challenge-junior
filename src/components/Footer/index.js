import * as React from 'react'

import { StaticImage } from "gatsby-plugin-image"

import facebookIcon from '../../images/icons/facebook.svg'
import instagramIcon from '../../images/icons/instagram.svg'

import './footer.scss'

const Footer = () => {

    return (
        <footer>
            <div className="foo-logo">
                <StaticImage
                    src="../../images/logo.png"
                    width={150}
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="A Gatsby astronaut"
                />
            </div>

            <div className="container foo-nav">
                <div>
                    <a href="/" className="menu-item">MENU</a>
                    <div className="foo-subnav">
                        <a href="/">Submenu</a>
                        <a href="/">Submenu</a>
                        <a href="/">Submenu</a>
                        <a href="/">Submenu</a>
                    </div>
                </div>
                <div className="foo-input-wrapper">
                    <a href="/" className="menu-item">MENU</a>
                    <div className="foo-subnav ">
                        <span className="foo-input-email">
                            <input type="text" placeholder="Email" aria-label="email" />
                            <a href="" className="submit-mail-btn">Enviar </a>
                        </span>
                    </div>
                </div>
                <div>
                    <a href="/" className="menu-item">MENU</a>
                    <div className="foo-social-nav">
                        <a href="/">
                            <img alt="icone instagram" width="16px" src={instagramIcon} />
                            Submenu
                            </a>

                        <a href="/">
                            <img alt="icone facebook" width="16px" src={facebookIcon} />
                            Submenu
                            </a>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <span>@Vnda - Tecnologia para ecommerce - CPNJ 00.0000.000/0001-00 </span>
            </div>
        </footer>
    )
}

export default Footer