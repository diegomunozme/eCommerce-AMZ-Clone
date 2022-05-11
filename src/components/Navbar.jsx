import React from "react";
import styledComponents from "styled-components";

const Container = styledComponents.div`
    height: 60px;
    backgorund-color: black;
    `;

const Navbar = () => {
  return <Container>Navbar</Container>;
};

export default Navbar;
