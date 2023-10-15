import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/button";
import SearchPosts from "../components/searchPosts";

const Post = ({ data, navigate, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.edges;
  const localSearchPost = data.localSearchPost;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <SearchPosts
        posts={posts}
        localSearchPost={localSearchPost}
        navigate={navigate}
        location={location}
      />
      <Link to="/">
        <Button marginTop="85px">Home</Button>
      </Link>
    </Layout>
  );
};

export default Post;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    localSearchPost {
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
`;
