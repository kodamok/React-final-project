import React from "react";
import MyContext from "./MyContext";

/* props goes here */




const MyProvider = (props) => {


  return <MyContext.Provider value={null}>{props.children}</MyContext.Provider>;
};

export default MyProvider;
