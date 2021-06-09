import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const BlogPage = ({ data }) => {
  const { posts } = data.blog

  return(
    <Layout pageTitle="My Blog Posts">

      {posts.map(post=>(
        <article key={post.id}>
          <Link to={post.fields.slug}>
            <h2>{ post.frontmatter.title }</h2>
          </Link>
          <small>
            {post.frontmatter.author}, {post.frontmatter.date}
          </small>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </Layout>
  )
}

// allMarkdownRemark를 통해 모든 md파일 query
// date(fromNow: true)를 통해 relative time을 출력
// allMarkdownRemark가 지정된 directory의 파일들을 scan해서
// 각 파일들을 Gatsby의 "node"로 만든다.
export const pageQuery = graphql`
  query MyQuery{
    blog: allMarkdownRemark{
      posts: nodes{
        fields{
          slug
        }
        frontmatter{
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
    }
  }
`

export default BlogPage