import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { UnorderedList, ListItem, NavContainer } from "../Styled/Styles.styled";
import { getNavBar } from "../Provider/Themes/navBar";
import MyContext from "../Provider/MyContext/MyContext";


const NavBar = () => {

  const context = useContext(MyContext);

  const {

    currentUser,
    auth
  } = context;


  let navBarLinks = getNavBar();

  return (
    <UnorderedList marginLeft="1rem" family="'Barrio'" size="1.2rem">
      {navBarLinks.map((item) => (
        <Link key={uuidv4()} to={`/${item.navname}`}>
          <ListItem>{item.navname}</ListItem>
        </Link>
      )) 
      }{currentUser ? (<Link to="/currentUser">
      <ListItem>User Info</ListItem>
    </Link> ) : null}
    </UnorderedList>
  );
};

export default NavBar;
