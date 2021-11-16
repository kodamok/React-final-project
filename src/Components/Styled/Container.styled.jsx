import styled from "styled-components";

export const Container = styled.div`
width:  ${({width}) => width }   ;
border:2px solid ${({color}) => color};
display: flex;
justify-content: ${({flex}) => flex};
margin: ${({margin}) => margin} 


`