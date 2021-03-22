import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { scale } from "../utils/typography";

function Footer() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata;
        return (
          <Container>
            <div>
              © {new Date().getFullYear()} - Written by{" "}
              <strong>{author}</strong>. Connect with me on{` `}
              <a href={`https://twitter.com/${social.linkedIn}`}>LinkedIn</a>.
            </div>
          </Container>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/cat.webp/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          linkedIn
        }
      }
    }
  }
`;

const Container = styled.footer`
  text-align: center;
  margin: 48px 0 12px;
  ${{ ...scale(-0.4) }};
`;

export default Footer;
