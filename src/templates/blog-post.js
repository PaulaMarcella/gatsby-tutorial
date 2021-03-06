import React from "react"
import { Link } from "gatsby"

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <div>
      <Link to="/blog">Back to All Pots</Link>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <h4>Posted by {post.frontmatter.author}</h4>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
