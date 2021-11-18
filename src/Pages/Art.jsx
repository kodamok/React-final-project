import React, {useState} from "react";
import Thumbnail from "../Components/Thumbnail"
import data from "../Database/art"


import {Container, ParagraphContainer, H1Container} from "../Styled/Styles.styled"





const Art = ( ) => {
    const [feministArt] = useState(data);

    const productDisplay = feministArt.map((item) => (
        <Thumbnail key={item.id} item={item} />
        ));

    return(
        <Container direction="column">
        <Container margin="2rem auto" width="500px" direction="column" justify="center" > 
            <H1Container align="center" decoration="underline">ART</H1Container>
            <ParagraphContainer align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt
              arcu non sodales neque sodales ut etiam. Felis imperdiet proin fermentum
              leo vel orci porta non. Nisi est sit amet facilisis magna. Phasellus
              egestas tellus rutrum tellus pellentesque eu tincidunt. 
            </ParagraphContainer>
        </Container>
        <Container direction="row" wrap="wrap" justify="center">{productDisplay}</Container>
      </Container>
    )
}


export default Art