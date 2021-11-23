import React, { useContext } from "react";
import { useLocation } from "react-router";
import MyContext from "../Provider/MyContext/MyContext";
import { Container, Imagecontainer } from "../Styled/Styles.styled";

const SideKart = () => {


  const HeadStyle = {
    color: "#F78812",
    fontFamily: "inconsolata",
  };

  const TableHead = {
    color: "#F78812",
    fontFamily: "inconsolata",
    fontSize: "1rem",
    textDecoration: "underline",
    textAlign: "center",
  };

  const HeadCell = {
    paddingInline: ".5rem",
    paddingBottom: ".5rem",
  };

  const TableCell = {
    color: "#F5C6A5",
    fontSize: "1rem",
    paddingInline: ".5rem",
    textAlign: "center",
    margin: "0",
  };


  const context = useContext(MyContext);
  const { kartItems, } = context;

  const total = () => {
    let num = 0;
    kartItems.forEach((item) => {
      num += item.price * item.quantity;
    });

    return num;
  };
  return (
    <Container
      justify="center"
      margin="2rem"
      background="#51050F"
      height="800px"
      max="400px"
      radius="20%"
      padding="1.2rem"
      color="#F78812"
    >
      <table>
        <thead style={TableHead}>
          <tr>
            <td style={HeadCell}></td>

            <td style={HeadCell}>Name of Item</td>

            <td style={HeadCell}>Quantity</td>
            <td style={HeadCell}>Price</td>
          </tr>
        </thead>

        {kartItems.map((item) => (
          <tbody>
            <th></th>

            <td style={TableCell}>{item.title}</td>

            <td style={TableCell}>{item.quantity}</td>
            <td style={TableCell}>{item.price}€</td>
          </tbody>
        ))}
      </table>
    </Container>
  );
};

export default SideKart;
