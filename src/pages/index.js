import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/button";

function IndexPage({ location }) {
  const siteTitle = "Today I Learned";

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" keywords={[`post`, `gatsby`, `javascript`, `react`]} />
      <img style={{ margin: 0, width: "50%" }} src="./cat.webp" alt="cat" />
      <h1>
        Hey people{" "}
        <span role="img" aria-label="wave emoji">
          👋
        </span>
      </h1>
      <p>Welcome to your new Gatsby website. You are on your home page.</p>
      <p>
        This starter comes out of the box with styled components and Gatsby's
        default starter blog running on Netlify CMS.
      </p>
      <p>Now go build something great!</p>
      <Link to="/post/">
        <Button marginTop="35px">See all Posts</Button>
      </Link>
    </Layout>
  );
}

export default IndexPage;
