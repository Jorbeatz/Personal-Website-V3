import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

const Loader = ({ finishLoading }) => {
  const [isLoaderDisplayed, setIsLoaderDisplayed] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaderDisplayed(false), 3000)
    finishLoading()
    return () => clearTimeout(timer)
  }, [])

  if (isLoaderDisplayed) {
    return <div>Loading ...</div>
  } else {
    return <div />
  }
}

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
}

export default Loader
