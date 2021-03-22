import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { rhythm, scale } from "../utils/typography";

function Header({ location, title }) {
  const rootPath = `${__PATH_PREFIX__}/`;
  const postPath = `${__PATH_PREFIX__}/post/`;

  if (location.pathname === rootPath || location.pathname === postPath) {
    return (
      <header>
        <Title>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === postPath ? `/post/` : `/`}
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
  ${{ ...scale(1.5) }};
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
`;

export default Header;
