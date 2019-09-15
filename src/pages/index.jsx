import React from "react"
import { Layout } from "@components"
import styled from "styled-components"
import { Main, mixins } from "@styles"

const Container = styled(Main)`
  ${mixins.sidePadding};
`

const IndexPage = () => (
  <Layout>
    <Container>
      <h1>Jordy Guntur</h1>
    </Container>
  </Layout>
)

export default IndexPage
