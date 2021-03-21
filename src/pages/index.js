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
        Hey there,{" "}
        <span role="img" aria-label="wave emoji">
          👋
        </span>
      </h1>
      <p>
        I'm Vuong Vu, a Front End developer working professionally for
        approximately 4 years. Throughout my work and learning, there're a lot
        of interesting things I've known and tried to remember, thing is, I
        always forget them and I keep searching for the same thing over and over
        again. However, I don't like writing blogs, I hate writing because it
        requires a lot of words.
      </p>
      <p>
        So when I know about this <strong>today-i-learned</strong> concept, I
        think it very suits me for some reasons:
      </p>
      <ul>
        <li>
          I want to have a place to note all the things I think it's
          interesting, not only tech but anything
        </li>
        <li>It doesn't require a lot of words</li>
        <li>I can practice writing English</li>
      </ul>
      <p>I'm happy that you're here :D.</p>
      <Link to="/post/">
        <Button marginTop="35px">See all Posts</Button>
      </Link>
    </Layout>
  );
}

export default IndexPage;
