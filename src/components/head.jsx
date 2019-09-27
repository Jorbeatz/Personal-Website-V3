import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import config from "@config"
import favicon from "@images/favicons/favicon.ico"

// TODO: Add favicon, OGP related tags, theme etc.
// TODO: Pass in metadata information

const Head = ({ metadata }) => (
  <Helmet>
    <html lang="en" />
    <title itemProp="name" lang="en">
      {metadata.title}
    </title>
    <link rel="shortcut icon" href={favicon} />
    <meta name="description" content={metadata.description} />
    <meta name="keywords" content={config.siteKeywords} />
    <link
      href="https://fonts.googleapis.com/css?family=Fira+Sans&display=swap"
      rel="stylesheet"
    ></link>
    <link
      href="https://fonts.googleapis.com/css?family=Lato&display=swap"
      rel="stylesheet"
    />
  </Helmet>
)

export default Head

Head.PropTypes = {
  metadata: PropTypes.object.isRequired,
}
