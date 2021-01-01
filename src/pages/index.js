import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Button from "../components/button"
import SearchPosts from "../components/searchPosts"

class IndexPage extends React.Component {

  render() {
    const siteTitle = "PME blog"
    const { data, navigate, location } = this.props;
    const posts = data.allMdx.edges
    const localSearchBlog = data.localSearchBlog
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <SearchPosts
          posts={posts}
          localSearchBlog={localSearchBlog}
          navigate={navigate}
          location={location}
        />

      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    localSearchBlog {
      index
      store
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
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
  }
`