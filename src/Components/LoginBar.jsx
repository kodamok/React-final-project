import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import "../App.css";
import MyContext from "../Provider/MyContext/MyContext";
import {
  ParagraphContainer,
  Container,
  Button,
  ListItem,
} from "../Styled/Styles.styled";

const LoginBar = () => {
  
//USE NAVIGATE
let navigate = useNavigate()



  //LOG IN AND SIGN IN BUTTONS
  const [login, setLogin] = useState(false);
  const [signIn, setSignIn] = useState(false);

  const showSignIn = () => {
    setSignIn(!signIn);
    setLogin(false);
    
  };
  const showLogIn = () => {
    setLogin(!login);
    setSignIn(false);
   
  };

  //IMPORT FIREBASE
  const context = useContext(MyContext);

  const {
    emailRef,
    passwordRef,
    loading,
    currentUser,
    handleSignup,
    handleLogIn,
    handleLogOut,
    auth
  } = context;



  return (
    <Container border="none" align="center">
      {currentUser ? <ParagraphContainer margin="0 1rem 0 0">Currently logged in as: {currentUser?.email}</ParagraphContainer> : null}
      <Container marginRight="1rem" size="1.2rem" family="'Barrio'" justify="center" border="none">
        {signIn === !true && (
          <Button height="45px" underline="none" onClick={showLogIn} margin="0 1rem 0 0">
            LogIn
          </Button>
        )}

        {login === !true && (
          <Button height="45px" underline="none" onClick={showSignIn} margin="0 1rem 0 0" onSubmit={() =>navigate('/currentUser')}>
            SignIn
          </Button>
        )}
      
        {login && (
          <form>
            <input ref={emailRef} type="text" placeholder="Email" />
            <input ref={passwordRef} type="password" placeholder="password" />
            <Button
              height="45px"
              margin="0 .5rem 0 .5rem"
              disabled={loading || currentUser}
              onClick={handleLogIn}
            >
              Submit
            </Button>
          </form>
        )}
        {signIn && (
          <form>
            <input ref={emailRef} type="text" placeholder="Email" />
            <input ref={passwordRef} type="password" placeholder="password" />
            <Button
              height="45px"
              margin="0 .5rem 0 .5rem"
              disabled={loading || currentUser}
              onClick={handleSignup}
            >
              Submit
            </Button>
          </form>
        )}
        {currentUser ? <Button
          
          height="45px"
          margin="0 1rem 0 0"
          disabled={loading || !currentUser}
          onClick={handleLogOut}
        >
          LogOut
        </Button> : null}
      </Container>
    </Container>
  );
};

export default LoginBar;
