import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { useLocation } from "react-router";
import { Container } from "../Styled/Styles.styled";
import ProductDetailComponent from "../Components/ProductDetailComponent";
import MyContext from "../Provider/MyContext/MyContext";

import specificObject from "../Helpers/theSelectedObject";
import SideKart from "../Components/SideKart";

const ProductsDetailsPage = () => {
  const context = useContext(MyContext);

  const { itemQuantityAndIndexInfo } = context;

  const { kartItems } = context;

  const location = useLocation();
  const { id } = location.state;

  //Extract id, title, quantity and Index to pass it to the
  //<IndividualArtProductDisplay /> component and update each component
  const theOneAndOnly = specificObject(itemQuantityAndIndexInfo, id);

  return (
    <Container>
      <ProductDetailComponent theOneAndOnly={theOneAndOnly} />
      
        
          {kartItems.length !== 0 ? <CSSTransition
          transitionName="sideKart"
          transitionAppear={50000}
          
          transitionEnter={true}
          transitionLeave={false}
        ><Container  margin="3rem"><SideKart /> </Container></CSSTransition> : null}
        
      
    </Container>
  );
};

export default ProductsDetailsPage;
