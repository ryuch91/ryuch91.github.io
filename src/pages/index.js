import React from "react"
import { graphql, Link } from "gatsby"

export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata
  return(
    <div>
      <h1> {title} </h1>
      <p> {description} </p>
      <p> Hello world! </p>
      <Link to="/blog"> Read my posts. </Link>
      <Link to="/about"> About me </Link>
      <img alt="Cute cat" src={data.image.publicURL} />
    </div>
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

    image: file(base: {eq: "cute-cat.jpg" }) {
      publicURL
    }
  }
`