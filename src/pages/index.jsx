import React from "react"
import { graphql } from "gatsby"
import { About, Hero, Layout } from "@components"
import styled from "styled-components"
import { Main, mixins } from "@styles"

const Container = styled(Main)`
  ${mixins.sidePadding};
`

const IndexPage = ({ data }) => (
  <Layout>
    <Container id="content">
      <Hero data={data.hero.edges} />
      <About data={data.about.edges} />
    </Container>
  </Layout>
)

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            title
            name
            subtitle
          }
          html
        }
      }
    }
    about: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                fluid(
                  maxWidth: 700
                  quality: 90
                  traceSVG: { color: "#64ffda" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            skills
          }
          html
        }
      }
    }
  }
`

export default IndexPage
