import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import { GlobalStyle } from "@styles"
import { Email, Footer, Head, Loader, Social } from "@components"

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              siteUrl
              description
            }
          }
        }
      `}
      render={({ site }) => (
        <div id="root">
          {/* TODO: Add metadata, site google keys, favicon, title etc. */}
          <Head metadata={site.siteMetadata} />

          <GlobalStyle />

          {isLoading ? (
            <Loader finishLoading={() => setIsLoading(false)} />
          ) : (
            <div className="container">
              <Social />
              <Email />
              {children}
              <Footer />
            </div>
          )}
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
