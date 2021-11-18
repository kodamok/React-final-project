import React from "react";

import { Link } from "react-router-dom";

import { ListItem, UnorderedList, H3Container, Imagecontainer } from "../Styled/Styles.styled";

const Thumbnail = ({ item }) => {
  const { id, title, image } = item;

  return (
    <UnorderedList >
      <ListItem key={id} >
        <Link to="/productDetailsPage" state={item}>
        {/* <H3Container align="center" decoration="underline" size="1rem" margin="0 0 .5rem 0">{title}</H3Container> */}
          <Imagecontainer
         width="250px"
         height="350px"
            className="productImg"
            src={image}
            alt={title}
          />
        </Link>
      </ListItem>
    </UnorderedList>
  );
};

export default Thumbnail;
