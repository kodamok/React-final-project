import React from "react";
import abyayalaLogo from "../resources/background/abyayalaLogo.jpeg";

import {
  FooterContactInfoLeft,
  FooterContactInfoRight,
  FooterContainer,
  FooterImgLogo,
  UnorderedList,
  ListItem,
} from "../Styled/Styles.styled";

/* FooterImgLogo.defaultProps = { src: abyayalaLogo }; */

const Footer = () => {
  return (
    <FooterContainer justify ="space-between">
      <FooterContactInfoLeft align="center"  direction ="row">

        <UnorderedList direction="column">
          <ListItem>
            Abyayala Libre
          </ListItem>
          <ListItem>
            <small>Telephone: +49 528 963 571</small>
          </ListItem>
          <ListItem>
            <small>Email: abyayalalibre@abyayala.com</small>
          </ListItem>
          <ListItem>
            <small>All right reserved to abyayala Libre</small>
          </ListItem>
        </UnorderedList>
      </FooterContactInfoLeft>
      <FooterContactInfoRight align="center"  direction ="row">

      </FooterContactInfoRight>
    </FooterContainer>
  );
};

export default Footer;
