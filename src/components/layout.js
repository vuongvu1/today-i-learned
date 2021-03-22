import React from "react";
import styled from "styled-components";

import Footer from "./footer";
import Header from "./header";
import { rhythm } from "../utils/typography";

function Layout({ location, title, children }) {
  return (
    <Wrapper>
      <Body>
        <Header location={location} title={title} />
        <main>{children}</main>
        <Footer />
      </Body>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
`;

const Body = styled.div`
  margin: 0 auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)} 0;
  min-height: 100vh;
`;

export default Layout;
