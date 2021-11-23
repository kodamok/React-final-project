import React from "react";
import LoginBar from "./LoginBar";
import NavBar from "./NavBar";

import { HeaderContainer } from "../Styled/Styles.styled";

/* const NavItems = navBar.map((item, index) => {
  return <NavBar key={index} element={item} />;
});

const LoginItems = navBar.map((item, index) => {
    return <LoginBar key={index} element={item} />;
  }); */
  

const Header = () => {
  return (
    <HeaderContainer wrap="wrap" justify="space-between" align="center">
       <NavBar/>
       <LoginBar/>
    </HeaderContainer>
  );
};

export default Header;
