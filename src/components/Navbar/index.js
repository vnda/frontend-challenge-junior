import * as React from "react"

import links from './content'

import './navbar.scss'

const Navbar = () => {

    return (
        <>
            <nav>
                <ul>
                    {links.map((link, i) => {
                        return (
                            <li key={i}>
                                <a href={link.url} title={link.label} target="_blank" rel="noopener noreferrer">
                                    {link.label}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Navbar