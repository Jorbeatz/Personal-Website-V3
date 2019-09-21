import React, { useState, useEffect } from "react"
import { withPrefix } from "gatsby"
import PropTypes from "prop-types"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"
import { theme, mixins, media, Section } from "@styles"
import ResumePDF from "../content/resume.pdf"
const { colors, fontSizes, fonts } = theme

const HeroContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  ${media.tablet`padding-top: 150px;`};
  div {
    width: 100%;
  }
`
const Hi = styled.h1`
  color: ${colors.tron};
  margin: 0 0 20px 3px;
  font-size: ${fontSizes.medium};
  font-family: "Menlo";
  font-weight: normal;
  ${media.desktop`font-size: ${fontSizes.small};`};
  ${media.tablet`font-size: ${fontSizes.smallish};`};
`
const Name = styled.h2`
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`
const Subtitle = styled.h3`
  font-size: 80px;
  line-height: 1.1;
  color: ${colors.slate};
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`
const Summary = styled.div`
  margin-top: 25px;
  width: 50%;
  max-width: 600px;
  a {
    ${mixins.inlineLink};
  }
`
const Resume = styled.a`
  ${mixins.bigButton};
  margin-top: 50px;
`

const Hero = ({ data }) => {
  const { frontmatter, html } = data[0].node
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 1000)
    return () => clearTimeout(timer)
  })

  const one = <Hi style={{ transitionDelay: "100ms" }}>{frontmatter.title}</Hi>
  const two = (
    <Name style={{ transitionDelay: "200ms" }}>{frontmatter.name}</Name>
  )
  const three = (
    <Subtitle style={{ transitionDelay: "300ms" }}>
      {frontmatter.subtitle}
    </Subtitle>
  )
  const four = (
    <Summary
      style={{ transitionDelay: "400ms" }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
  const five = () => (
    <div style={{ transitionDelay: "500ms" }}>
      <Resume
        href={ResumePDF}
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        Resume
      </Resume>
    </div>
  )

  const items = [one, two, three, four, five]

  return (
    <HeroContainer>
      <TransitionGroup>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={3000}>
              {item}
            </CSSTransition>
          ))}
      </TransitionGroup>
    </HeroContainer>
  )
}

Hero.PropTypes = {
  data: PropTypes.array.isRequired,
}

export default Hero
