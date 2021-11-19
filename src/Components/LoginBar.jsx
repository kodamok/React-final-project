import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UnorderedList, ListItem, Container } from "../Styled/Styles.styled";

const LoginBar = () => {
  const [login, setLogin] = useState(false);
  const showLogIn = () => setLogin(!login);

  const [signIn, setSignin] = useState(false);
  const showSignIn = () => setSignin(!signIn);

  return (
    <Container border="none">
      <UnorderedList marginRight="1rem" size="1.2rem" family="'Barrio'">
        <Link to="/#">
          <ListItem onClick={() => showLogIn}>LogIn</ListItem>
        </Link>
        <Link to="/#">
          <ListItem onClick={() => showSignIn}>SignIn</ListItem>
        </Link>
      </UnorderedList>
      <Container border="none">
        {login === true ? (
          setSignin(false)
        ) : (
          <form>
            <input type="text" placeholder="UserName" />
            <input type="password" placeholder="password" />
          </form>
        )}
      </Container>

      <Container border="none">
        {signIn === true ? (
          setLogin(false)
        ) : (
          <form>
            <input type="text" placeholder="UserName" />
            <input type="password" placeholder="password" />
          </form>
        )}
      </Container>
    </Container>
  );
};

export default LoginBar;
