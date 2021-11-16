import React from "react";
import styled from "styled-components";

const UnorderedList = styled.ul`
  list-style-type: none;
  display: flex;
  margin-left:-16px;
`;
const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.text.navLinks};
  padding-inline: 0.7rem;
`;


const NavBar = ({ element }) => {
  return (
    <UnorderedList>
      <ListItem>{element.home}</ListItem>
      <ListItem>{element.events}</ListItem>
      <ListItem>{element.contact}</ListItem>
      <ListItem>{element.art}</ListItem>
    </UnorderedList>
  )
}

export default NavBar;
