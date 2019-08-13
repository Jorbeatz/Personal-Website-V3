import React from "react"
import PropTypes from "prop-types"

import { Loader } from "@components"

const Layout = ({ children }) => (
  <div id="root">
    {/* TODO: Add meatdata, site google keys, favicon, title etc. */}
    {/* <Head />  */}

    <Loader />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
