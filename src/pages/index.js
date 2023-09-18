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
        I'm Vuong Vu, a frontend developer. I've encountered many interesting
        things during my work and learning journey, but I often forget them and
        end up searching for the same information repeatedly.
      </p>

      <p>
        Today, I discovered the "Today I Learned" (TIL) concept, and it fits my
        needs for a few reasons:
      </p>

      <ul>
        <li>I want a place to note down interesting things just for myself.</li>
        <li>It doesn't require lengthy blog posts; short notes are enough.</li>
        <li>It's a great way for me to practice writing in English.</li>
      </ul>

      <p>Nice to meet you here! ♥️</p>

      <Link to="/post/">
        <Button marginTop="35px">See all Posts</Button>
      </Link>
    </Layout>
  );
}

export default IndexPage;
