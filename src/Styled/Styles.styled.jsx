import styled from "styled-components";


export const Container = styled.div`
  width: ${({ width }) => width};
  height: ${({height}) => height};
  aspect-radio: ${({radio}) => radio};
  border: 2px solid ${({ color }) => color};
  border:${({border}) => border};
  display: flex;
  flex-direction: ${({direction}) => direction};
  flex-wrap: ${({wrap}) => wrap};
  justify-content: ${({ justify }) => justify};
  align-items:${({align}) => align};
  margin: ${({ margin }) => margin};
  padding:${({padding}) => padding};
  align-content:${({content}) => content};
  background-color:${({background}) => background};
  border-radius:${({radius}) => radius};
  max-height:${({max}) => max};
`;

export const HeaderContainer = styled.header`
  width: ${({ width }) => width};
  border-bottom: 2px solid ${({theme}) => theme.colors.text.navLinks};
  display: flex;
  flex-wrap: ${({wrap}) => wrap};
  justify-content: ${({ justify }) => justify};
  align-items: ${({align}) => align};
  margin-right:${({marginRight}) => marginRight};
  margin-left: ${({marginLeft}) => marginLeft};
  background: ${({theme}) => theme.colors.background.bgHeader};

`;

export const NavContainer = styled.nav`


`

export const UnorderedList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  font-family: ${({family}) => family};
  margin-right:${({marginRight}) => marginRight};
  margin-left: ${({marginLeft}) => marginLeft};
  font-size: ${({size}) => size};
 

`;
export const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.text.navLinks};
  padding-inline: 0.7rem;
  font-family: ${({family}) => family};
  font-size: ${({size}) => size};
  height:${({height}) => height};
  cursor: pointer
 
`;

export const FooterContainer = styled.footer`
  width: ${({ width }) => width};
  font-family: 'Inconsolata';
  border: 2px solid ${({ color }) => color};
  display: flex;
  justify-content: ${({ justify }) => justify};
  margin: ${({ margin }) => margin};
  background: ${({theme}) => theme.colors.background.bgFooter};
  border-top:2px solid ${({theme}) => theme.colors.text.navLinks};
  `;

export const FooterContactInfoLeft = styled.div`
  display: flex;
  flex-direction: ${({direction}) => direction};
  width: ${({ width }) => width};
  justify-content: ${({ flex }) => flex};
  align-items: ${({ align }) => align};
  margin-left:1rem;
`;

export const FooterImgLogo = styled.img`
  height: 100px;
  border-radius: 20%;
  border: 2px solid ${({ theme }) => theme.colors.text.navLinks};
  
`;


export const FooterContactInfoRight = styled.div`
  display: flex;
  flex-direction: ${({direction}) => direction};
  width: ${({ width }) => width};
  border: 2px solid ${({ color }) => color};
  justify-content: ${({ flex }) => flex};
  align-items: ${({ align }) => align};
  margin: ${({ margin }) => margin};
`;





export const ParagraphContainer = styled.p`
color:${({theme}) => theme.colors.text.p2};
font-family: 'Inconsolata';
font-size: ${({size}) => size};
font-Weight: ${({weight}) => weight};
text-align: ${({align}) => align};
line-height: ${({height}) => height};
margin:${({margin}) => margin};

`

export const H1Container = styled.h1`
color: ${({theme}) => theme.colors.text.h1};
font-size: ${({size}) => size};
text-align:${({align}) => align};
text-decoration: ${({decoration}) => decoration};
margin: ${({margin}) => margin || "0"} ;

`

export const H2Container = styled.h2`
color: ${({theme}) => theme.colors.text.h2};
font-size: ${({size}) => size};
text-align: ${({align}) => align};
text-decoration: ${({decoration}) => decoration};
margin:${({margin}) => margin};
`



export const H3Container = styled.h3`
color: ${({theme}) => theme.colors.text.navLinks};
font-size: ${({size}) => size};
text-align: ${({align}) => align};
text-decoration: ${({decoration}) => decoration};
margin:${({margin}) => margin};

`


export const Imagecontainer = styled.img`
width:${({width}) => width};
height: ${({height}) => height};
border-radius: ${({radius}) => radius};
margin: ${({margin}) => margin};
padding: ${({padding}) => padding};
border: 2px solid ${({border, theme}) => border ? border : theme.colors.text.h1};
`

export const Button = styled.button`
border: 2px solid ${({border, theme}) => border ? border : theme.colors.text.navLinks };
border-radius: ${({radius}) => radius};
text-decoration:${({underline}) => underline};
margin: ${({margin}) => margin};
height:${({height}) => height};
cursor:pointer;
align-self:${({self}) => self};


`

