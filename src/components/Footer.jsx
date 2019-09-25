import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { theme, mixins, media } from "@styles"
const { colors, fontSizes, fonts } = theme

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
const Copy = styled.div`
  margin: 10px 0;
  font-family: ${fonts.FiraSans};
  font-size: ${fontSizes.xsmall};
  line-height: 1;
`

const Footer = () => {
  return (
    <FooterContainer>
      <Copy>
        <div>Designed &amp; Developed by Jordy Guntur</div>
      </Copy>
    </FooterContainer>
  )
}

export default Footer
