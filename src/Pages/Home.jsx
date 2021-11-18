import React from "react";
import { Container, Imagecontainer } from "../Styled/Styles.styled";
import abyayalaLogo  from "../resources/background/abyayalaLogo.jpeg"

const Home = () => {
  return (
<Container justify="center" >
<Imagecontainer src={abyayalaLogo}  alt="Logo" width="880px" border="none" />
</Container>
  )
}

export default Home;
