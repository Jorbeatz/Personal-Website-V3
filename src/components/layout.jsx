import React, { useState } from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from "@styles"
import { Loader } from "@components"

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div id="root">
      {/* TODO: Add metadata, site google keys, favicon, title etc. */}
      {/* <Head />  */}

      <GlobalStyle />

      {isLoading ? (
        <Loader finishLoading={() => setIsLoading(false)} />
      ) : (
        <div className="container">{children}</div>
      )}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
