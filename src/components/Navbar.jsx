import React from "react";
import styledComponents from "styled-components";
import { Search } from "@material-ui/icons";

const Container = styledComponents.div`
    height: 60px;
`;
const Wrapper = styledComponents.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styledComponents.div`
flex: 1;
display: flex;
align-items: center;
`;

const Language = styledComponents.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styledComponents.div`
  border: 0.5px solid lightgray;
  display:flex;
  align-items: center;
  margin-left: 25px;
`;

const Input = styledComponents.input`
  border:none;
`

const Center = styledComponents.div`flex: 1`;

const Logo = styledComponents.h1`
  font-weight: bold;
  text-align:center;
`
const Right = styledComponents.div`flex: 1`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input/>
            <Search/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Ecommerce</Logo>
        </Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
