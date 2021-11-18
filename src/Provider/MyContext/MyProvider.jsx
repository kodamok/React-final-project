import React,{useState} from "react";
import MyContext from "./MyContext";
import itemQuantityAndIndex from "../../Helpers/itemQuantityAndIndex"

/* props goes here */

const MyProvider = (props) => {
  //KART
  const [kartItems, setKartItems] = useState([]);
  const itemQuantityAndIndexInfo = itemQuantityAndIndex(kartItems);

  return (
    <MyContext.Provider
      value={{ kartItems, setKartItems, itemQuantityAndIndexInfo }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;
