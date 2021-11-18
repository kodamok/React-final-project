import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { getNavBar } from "../Provider/Themes/navBar";
import { UnorderedList, ListItem, Container } from "../Styled/Styles.styled";

const LoginBar = () => {
  let navBarLinks = getNavBar();

  return (
   
      <UnorderedList marginRight="15rem" size="1.2rem" family="'Barrio'">
        {navBarLinks.map((item) => (
          <Link key={uuidv4()} to={`/${item.logname}`}>
            <ListItem>{item.logname}</ListItem>
          </Link>
           
        ))}

        
       
      </UnorderedList>
   
  );
};

export default LoginBar;
