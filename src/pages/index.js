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
      <div style={{ textAlign: "center" }}>
        <img
          style={{ margin: 0, width: "50%", borderRadius: "50%" }}
          src="./avatar.png"
          alt="avatar"
        />
      </div>
      <h1>
        Hey there{" "}
        <span role="img" aria-label="wave emoji">
          👋
        </span>
      </h1>
      <p>
        I'm Vuong Vu, a Front End developer working professionally for
        approximately 4 years. Throughout my work and learning, there're a lot
        of interesting things I've known and tried to remember, problem is, I
        always forget them as I keep searching for the same thing over and over
        again.
      </p>
      <p>
        So when I know about this{" "}
        <a href="https://www.reddit.com/r/todayilearned/">
          today I learned (til)
        </a>{" "}
        concept, I think it very suits me for some reasons:
      </p>
      <ul>
        <li>
          I want to have a place to note all interesting things, just for myself
        </li>
        <li>It doesn't require a lot of words like blogs</li>
        <li>I can practice writing English</li>
      </ul>
      <p>
        I'm happy that you're here{" "}
        <span role="img" aria-label="heart emoji">
          ♥️
        </span>
      </p>
      <Link to="/post/">
        <Button marginTop="35px">See all Posts</Button>
      </Link>
    </Layout>
  );
}

export default IndexPage;
