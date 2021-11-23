import React, {useContext} from "react";
import MyContext from "../Provider/MyContext/MyContext";
import { Container, Imagecontainer } from "../Styled/Styles.styled";

const KartComponent = () => {

    
        const HeadStyle = {
            color: "#F78812",
            fontFamily: "inconsolata",
          };
        
          const TableHead = {
            color: "#F78812",
            fontFamily: "inconsolata",
            fontSize: "2rem",
            textDecoration: "underline",
            textAlign: "center"
          };
        
          const HeadCell = {
            paddingInline: "2rem",
            paddingBottom:"2rem",
          };
        
          const TableCell = {
            color: "#F5C6A5",
            fontSize: "2rem",
            paddingInline: "2rem",
            textAlign: "center",
          };
        
          const TotalCell = {
            color: "#F5C6A5",
            fontSize: "3rem",
            fontWeight: "900",
            paddingInline: "2rem",
            textAlign: "center",
            color:"#F78812",
        
          };
        
          const SubTotalCell = {
            color: "#F5C6A5",
            fontSize: "2rem",
            fontWeight: "900",
            paddingInline: "2rem",
            textAlign: "center",
            color:"#F78812",
            textDecoration:"underline"
        
          };
        
        
        
          const context = useContext(MyContext);
          const { kartItems } = context;
        
         const total = () => {
             let num = 0;
             kartItems.forEach((item) => {num += (item.price * item.quantity)})
        
             return num
         }
        
          return (
            <Container justify="center" margin="2rem">
              <table>
                <thead style={TableHead}>
                  <tr>
                    <td style={HeadCell}></td>
                    <td style={HeadCell}>ID</td>
                    <td style={HeadCell}>Name of Item</td>
                    <td style={HeadCell}>Image</td>
                    <td style={HeadCell}>Quantity</td>
                    <td style={HeadCell}>Price</td>
                    <td style={HeadCell}>Total</td>
                  </tr>
                </thead>
        
                {kartItems.map((item) => (
                  <tbody>
                    <th></th>
                    <td style={TableCell}>{item.id}</td>
                    <td style={TableCell}>{item.title}</td>
                    <td style={TableCell}>
                      <Imagecontainer
                        height="100px"
                        src={item.image}
                        alt={item.title}
                      />
                    </td>
                    <td style={TableCell}>{item.quantity}</td>
                    <td style={TableCell}>{item.price}€</td>
                    <td style={TableCell}>{item.price * item.quantity}€</td>
                  </tbody>
                    ))}
                  <tfoot>
                  <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td style={TableCell}></td>
                      <td></td>
                      <td rowspan ="2" style={SubTotalCell}>SUBTOTAL</td>
                    </tr>
                  <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td style={TableCell}></td>
                      <td></td>
                      <td  style={TotalCell}>{total()}€</td>
                    </tr>
                  </tfoot>
                   
              </table>
            </Container>
    )
}


export default KartComponent