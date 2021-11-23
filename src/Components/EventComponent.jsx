import React from "react";
import { events } from "../resources/events/photos/eventInfo/events";
import { Container, H1Container, H3Container, H2Container, ParagraphContainer } from "../Styled/Styles.styled";


const EventComponent = () => {

    let displayEvents = events.map((item) => ( 

    <Container justify="center" direction="column" align="center" padding="1rem"  width="500px">
        <H2Container>{item.title}</H2Container>
        <H3Container>{item.date}</H3Container>
        <H3Container decoration="underline">Time:</H3Container>
        <H3Container> {item.time}</H3Container>
        <ParagraphContainer align="center">{item.description}</ParagraphContainer>
    </Container>))

    console.log(displayEvents);

    return(
        <Container justify="center" direction="column"  margin="0 auto" padding="1rem">
            <H1Container align="center" decoration="underline">EVENTS</H1Container>
            {displayEvents}
        </Container>

    )
}

export default EventComponent