import * as React from "react"

import SearchIcon from '../../images/icons/loupe.svg'
import ShoppingCartIcon from '../../images/icons/shopping-cart.svg'
import userIcon from '../../images/icons/user.svg'

import "./nav-icons.scss"

const NavIcon = ({ iconName }) => {
    return (
        <>
            <a href="/" className="nav-icon" aria-label="icone busca">
                <img alt="icone busca" width="24px" src={SearchIcon} />
            </a>
            <a href="/" className="nav-icon" aria-label="icone usuario">
                <img alt="icone usuario" width="24px" src={userIcon} />
            </a>
            <a href="/" className="nav-icon" aria-label="icone carrinho de compras">
                <img alt="icone carrinho de compras" width="24px" src={ShoppingCartIcon} />
            </a>
        </>
    )
}

export default NavIcon