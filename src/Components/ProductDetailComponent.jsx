import React, { useContext } from "react";
import { useLocation } from "react-router";
import addAndRemoveItems from "../Helpers/addAndRemoveItems";

import MyContext from "../Provider/MyContext/MyContext";

import {
  Container,
  Imagecontainer,
  ParagraphContainer,
  H3Container,
  H2Container,
  H1Container,
  Button,
} from "../Styled/Styles.styled";

const ProductDetailComponent = ({ theOneAndOnly }) => {
  const context = useContext(MyContext);
  const { kartItems, setKartItems } = context;

  const location = useLocation();
  const { title, image, price, description, artistName, artistLink } =
    location.state;

  console.log(image);

  return (
    <Container width="55vw"  margin="1rem 0 1rem 15rem">
      {/* Product Image  */}
      <Imagecontainer src={image} radius="10%" height="700px" />
      <Container
        width="850px"
        direction="column"
        margin="0 0 0 2rem"
        padding="1rem"
      >
        {/* Product Artist Info */}
        <Container direction="column" padding="1rem">
          <H1Container decoration="underline"  size="2rem">{title}</H1Container>
          <H2Container size="1.5rem" margin="0.1rem">{artistName}</H2Container>
          <a href="http://www.google.com">
            <H3Container size="1.5rem" margin="0.1rem">{artistLink}</H3Container>
          </a>
          <ParagraphContainer>{description}</ParagraphContainer>
        </Container>

        {/* Product Price and Buttons */}
        <Container
          direction="row"
          justify="flex-start"
          padding="2rem"
          align="center"
        >
          <H1Container >{price}€</H1Container>
          <Container
            height="70px"
            padding=".5rem"
            width="120px"
            justify="center"
            align="center"
            margin="0 0 0  .5rem"
          >
            <Button
              margin=".5rem"
              radius="20%"
              value="remove"
              onClick={(e) =>
                addAndRemoveItems(
                  e.target.value,
                  location.state,
                  kartItems,
                  setKartItems
                )
              }
            >
              -
            </Button>
            <H2Container margin="0">{theOneAndOnly.quantity}</H2Container>
            <Button
              margin=".5rem"
              radius="20%"
              value="add"
              onClick={(e) =>
                addAndRemoveItems(
                  e.target.value,
                  location.state,
                  kartItems,
                  setKartItems
                )
              }
            >
              +
            </Button>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default ProductDetailComponent;
