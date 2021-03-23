import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { rhythm, scale } from "../utils/typography";

const rootPath = `${__PATH_PREFIX__}/`;
const postPath = `${__PATH_PREFIX__}/post/`;

function Header({ location, title }) {
  const isRootPath = location.pathname === rootPath;
  const isPostPath = location.pathname === postPath;

  if (isRootPath || isPostPath) {
    return (
      <header>
        <Title isCenter={isRootPath}>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={isPostPath ? `/post/` : `/`}
          >
            {title}
          </Link>
        </Title>
      </header>
    );
  } else {
    return (
      <header>
        <h3 style={{ marginTop: 0 }}>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/post/`}
          >
            {title}
          </Link>
        </h3>
      </header>
    );
  }
}

const Title = styled.h1`
  ${{ ...scale(1.2) }};
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
  text-align: ${p => (p.isCenter ? "center" : "left")};
`;

export default Header;
