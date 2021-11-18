import React from "react";
import { Link} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { UnorderedList, ListItem, NavContainer } from "../Styled/Styles.styled";
import { getNavBar } from "../Provider/Themes/navBar";

const NavBar = () => {
  let navBarLinks = getNavBar();

  return (
    
      <UnorderedList marginLeft="15rem" family="'Barrio'" size="1.2rem">
        {navBarLinks.map((item) => (
          <Link key={uuidv4()} to={`/${item.navname}`}><ListItem>
            {item.navname}
          </ListItem></Link>
        ))}
      </UnorderedList>
   
  );
};

export default NavBar;
