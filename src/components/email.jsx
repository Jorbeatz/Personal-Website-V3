import React, { useState, useEffect } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { email } from "@config"
import styled from "styled-components"
import { theme, media } from "@styles"
const { colors, fontSizes } = theme

const EmailContainer = styled.div`
  width: 40px;
  position: fixed;
  bottom: 250px;
  left: 40px;
  color: ${colors.lightSlate};
  ${media.desktop`left: 25px;`};
  ${media.tablet`display: none;`};
  div {
    width: 100%;
    margin: 0 auto;
  }
`
const EmailLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &:after {
    content: "";
    display: block;
    margin: 0 auto;
    background-color: ${colors.lightSlate};
  }
`
const EmailLink = styled.a`
  font-family: "Menlo";
  font-size: ${fontSizes.xsmall};
  letter-spacing: 0.5px;
  writing-mode: vertical-rl;
  margin: 20px auto;
  padding: 10px;

  &:hover,
  &:focus {
    transform: translateY(-3px);
  }
`

const Email = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 2000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <EmailContainer>
      <TransitionGroup>
        {isMounted && (
          <CSSTransition timeout={3000} classNames="fade">
            <EmailLinkWrapper>
              <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
            </EmailLinkWrapper>
          </CSSTransition>
        )}
      </TransitionGroup>
    </EmailContainer>
  )
}

export default Email
