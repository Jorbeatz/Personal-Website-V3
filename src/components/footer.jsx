import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { IconGithub, IconLinkedin, IconInstagram } from "@components/icons"
import { theme, mixins, media } from "@styles"
import { socialMedia } from "@config"
const { colors, fontSizes } = theme

const FooterContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.tronDarker};
  color: ${colors.slate};
  text-align: center;
  height: auto;
  min-height: 70px;
`
const SocialContainer = styled.div`
  color: ${colors.lightSlate};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
  ${media.tablet`display: block;`};
`
const SocialItemList = styled.ul`
  ${mixins.flexBetween};
`
const SocialLink = styled.a`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`
const GithubLink = styled.a`
  color: ${colors.slate};
`
const Copy = styled.div`
  margin: 10px 0;
  font-family: "Menlo";
  font-size: ${fontSizes.xsmall};
  line-height: 1;
`

const Footer = () => {
  return (
    <FooterContainer>
      <SocialContainer>
        <SocialItemList>
          {socialMedia.map(({ name, url }, i) => (
            <li key={i}>
              <SocialLink
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={name}
              >
                {name === "Github" ? (
                  <IconGithub />
                ) : name === "Linkedin" ? (
                  <IconLinkedin />
                ) : name === "Instagram" ? (
                  <IconInstagram />
                ) : (
                  <IconGithub />
                )}
              </SocialLink>
            </li>
          ))}
        </SocialItemList>
      </SocialContainer>
      <Copy>
        <GithubLink
          href="https://github.com/bchiang7"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <div>template by bchiang7</div>
        </GithubLink>
      </Copy>
    </FooterContainer>
  )
}

export default Footer
