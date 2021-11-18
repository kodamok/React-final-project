import React, {useContext} from "react";
import { useLocation } from "react-router";

import ProductDetailComponent from "../Components/ProductDetailComponent"
import MyContext from "../Provider/MyContext/MyContext";

import specificObject from "../Helpers/theSelectedObject"


const ProductsDetailsPage = () => {
    const context = useContext(MyContext)

const {itemQuantityAndIndexInfo} = context

const location = useLocation()
const {id} = location.state

 //Extract id, title, quantity and Index to pass it to the
  //<IndividualArtProductDisplay /> component and update each component
  const theOneAndOnly = specificObject(itemQuantityAndIndexInfo, id)


  return(
      <section>
          <ProductDetailComponent theOneAndOnly={theOneAndOnly} />
      </section>
  )



}


export default ProductsDetailsPage