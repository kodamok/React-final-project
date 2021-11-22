import React, { useContext, useRef } from "react";
import {
  Container,
  H1Container,
  H3Container,
  ParagraphContainer,
} from "../Styled/Styles.styled";
import MyContext from "../Provider/MyContext/MyContext";
import styled from "styled-components";
import { updateProfile } from "firebase/auth";


const FormFilledContainers = styled.p`
  color: "#51050F";
  font-size: 2rem;
  line-height: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
`;

const User = () => {
 const context = useContext(MyContext);

  const { getAuth, currentUser, auth } = context;
  
 /* 
  const userName = useRef()

  const updateProfile = () => (auth.currentUser, {
    displayName: { userName },
  })
    .then(() => {
      "PROFILE UPDATED";
    })
    .catch((error) => {
      "AN ERROR OCURRED";
    });

  console.log(userName.current); */


console.log(getAuth);
  return (
    <Container direction="column" align="center">
      <Container margin="2rem 0 0 0">
        <H1Container decoration="underline">User Info:</H1Container>
      </Container>

      <form action="">
        <Container
          direction="column"
          border="8px solid #51050F"
          background="#F78812"
          width="700px"
          radius="10%"
          padding="3rem"
          margin="2rem"
        >
          <label type="text">Full Name:</label>
          <input  name="userName" type="text"></input>
          <label id="input">Email:</label>
          <FormFilledContainers>
            {currentUser.auth.currentUser.email}
          </FormFilledContainers>
          <label>Confirm Email:</label>
          <FormFilledContainers>
            {currentUser.emailVerified === false ? (
              <button>Verify Email!</button>
            ) : (
              "Email Verified!"
            )}
          </FormFilledContainers>
        </Container>
      </form>
    </Container>
  );
};

export default User;
