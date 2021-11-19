import React from "react";
import { Container, Imagecontainer } from "../Styled/Styles.styled";
import abyayalaLogo  from "../resources/background/abyayalaLogo.jpeg"

const Home = () => {

  const logo =abyayalaLogo
  return (
<Container justify="center" height="700px" >
<Imagecontainer src={logo}  alt="Logo" width="880px" height="700px" border="none" />
</Container>
  )
}

export default Home;
