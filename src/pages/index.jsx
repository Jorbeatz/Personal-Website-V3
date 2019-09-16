import React from "react"
import { Hero, Layout } from "@components"
import styled from "styled-components"
import { Main, mixins } from "@styles"

const Container = styled(Main)`
  ${mixins.sidePadding};
  counter-reset: section;
`

const IndexPage = () => (
  <Layout>
    <Container id="content">
      <Hero />
    </Container>
  </Layout>
)

export default IndexPage
