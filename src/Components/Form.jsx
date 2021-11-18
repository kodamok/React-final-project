import React from "react";
import styled from "styled-components";

import { Container, H3container } from "../Styled/Styles.styled";

const Label = styled.label`
  border: 2px solid white;
`;

const Input = styled.input`


`



const Form = () => {
  return (
    <Container direction="column" background="#F78812" width="500px" height="700px" radius="10%" padding="5rem">
      <Label>Full Name:</Label>
      <Input type ="text" placeholder="full name"></Input>
    </Container>
  );
};

export default Form;
