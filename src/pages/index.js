import * as React from "react"
import { Link, graphql, navigate } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location}>
      <Seo />
      <section className="articles">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <article key={post.fields.slug}
              className="post-list-item"
              itemScope
              itemType="http://schema.org/Article"
              onClick={() => {navigate(post.fields.slug)}}
            >
              <header>
                <h2>{title}</h2>
                <small>{post.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: post.frontmatter.description || post.excerpt,
                  }}
                  itemProp="description"
                />
              </section>
            </article>
          )
        })}
        </section>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
