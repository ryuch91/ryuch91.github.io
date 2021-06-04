import React from "react"
import { graphql, Link } from "gatsby"

export default function Blog({ data }){
  const { posts } = data.blog

  return(
    <div>
      <h1>My blog posts</h1>

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
    </div>
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