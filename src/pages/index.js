import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const ContentsWrapper = styled.div`
  text-align: center;
`

const IndexPage = ({ data }) => {
  const { title, description } = data.site.siteMetadata
  return(
    <Layout pageTitle={title}>
      <ContentsWrapper>
        <h1> {description} </h1>
        <img alt="Cloudy Sky" src={data.image.publicURL} />
      </ContentsWrapper>
    </Layout>
  )
}

//gatsby-config.js의 site metadata를 가져오는 쿼리
//GraphQL이 해당 데이터들을 가져올 수 있게 해주고,
//Gatsby가 fetching을 자동으로 해준다.
//(fetching은 build 과정 중에 수행된다.)
export const pageQuery = graphql`
  query MetadataQuery{
    site{
      siteMetadata{
        title
        description
      }
    }

    image: file(base: {eq: "cloudy-sky.jpg" }) {
      publicURL
    }
  }
`

export default IndexPage