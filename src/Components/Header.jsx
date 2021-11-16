import React from "react";
import NavBar from "./NavBar";
import { navBar } from "../Providers/Themes/navBar";
import { Container } from "../Components/Styled/Container.styled";

const NavItems = navBar.map((item, index) => {
  return <NavBar key={index} element={item} />;
});

const Header = () => {
  return (
    <Container color="red" width="inherit">
      {NavItems}
    </Container>
  );
};

export default Header;
