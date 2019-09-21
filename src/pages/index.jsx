import React from "react"
import { graphql } from "gatsby"
import { Hero, Layout } from "@components"
import styled from "styled-components"
import { Main, mixins } from "@styles"

const Container = styled(Main)`
  ${mixins.sidePadding};
  counter-reset: section;
`

const IndexPage = ({ data }) => (
  <Layout>
    <Container id="content">
      <Hero data={data.hero.edges} />
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
  }
`

export default IndexPage
