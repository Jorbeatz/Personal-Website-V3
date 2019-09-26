import React, { useState, useEffect } from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import styled from "styled-components"
import { theme, mixins } from "@styles"
const { colors } = theme

const LoaderContainer = styled.div`
  ${mixins.flexCenter};
  background-color: ${colors.darker};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
`
const LogoWrapper = styled.div`
  width: max-content;
  max-width: 100px;
  transition: ${theme.transition};
  opacity: ${props => (props.isLoaderDisplayed ? 1 : 0)};
`

const Loader = ({ finishLoading }) => {
  //TODO: This will be the animation function for the logo
  const animate = () => {
    const timeout = setTimeout(() => finishLoading(), 1000)
  }

  const [isLoaderDisplayed, setIsLoaderDisplayed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaderDisplayed(true), 10)
    animate()
    return () => clearTimeout(timer)
  }, [])

  return (
    <LoaderContainer>
      <Helmet bodyAttributes={{ class: `hidden` }} />
      <LogoWrapper isLoaderDisplayed={isLoaderDisplayed}></LogoWrapper>
    </LoaderContainer>
  )
}

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
}

export default Loader
