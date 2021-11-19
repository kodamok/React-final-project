import React from "react";


import { Container, H1Container } from "../Styled/Styles.styled";



const Form = () => {
  return (
    <Container direction="column" align="center" >
      <Container margin="2rem 0 0 0">
        <H1Container decoration="underline">Contact</H1Container>
      </Container>
    
    <Container direction="column" border="8px solid #51050F" background="#F78812" width="500px" height="700px" radius="10%" padding="3rem" margin ="2rem">
      <label type="text">Full Name:</label>
      <input type ="text" placeholder="full name"></input>
      <label id="input">Email:</label>
      <input type ="text" placeholder="password"></input>
      <label>Please tell us how can we help you:</label>
      <textarea placeholder="full name" rows="30"></textarea>
      
      <button>Submit</button>
    
    </Container>
    
    </Container>
  );
}; 

export default Form;
