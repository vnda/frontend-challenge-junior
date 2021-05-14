import * as React from "react"
import PropTypes from "prop-types"

import "./layout.scss"

import Header from "../Header"
import Footer from "../Footer"

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
