import React from "react";


import { Container, H1Container } from "../Styled/Styles.styled";



const Form = () => {
  return (
    <Container direction="column" align="center" >
      <Container margin="2rem 0 0 0">
        <H1Container decoration="underline">Contact</H1Container>
      </Container>
    
    <form action="">
      <Container direction="column" border="8px solid #51050F" background="#F78812" width="700px" height="800px" radius="10%" padding="3rem" margin ="2rem">
        <label type="text">Full Name:</label>
        <input type ="text" placeholder="Full Name"></input>
        <label id="input">Email:</label>
        <input type ="text" placeholder="Email"></input>
        <label>Please tell us how can we help you:</label>
        <textarea placeholder="Text Area" rows="20"></textarea>
      
        <button>Submit</button>
      
      </Container>
    </form>
    
    </Container>
  );
}; 

export default Form;
