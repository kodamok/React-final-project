import React,{useState, useRef} from "react";
import MyContext from "./MyContext";
import itemQuantityAndIndex from "../../Helpers/itemQuantityAndIndex";
import { signup, useAuth, logOut, logIn, auth } from "../../Helpers/firebase";

const MyProvider = (props) => {
  //KART
  const [kartItems, setKartItems] = useState([]);
  const itemQuantityAndIndexInfo = itemQuantityAndIndex(kartItems);



  //LOADING WHILE AUTHENTICATION (block signup button)
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  //SIGN UP FUNCTIONALITIES (async function and input retrievers)
  const emailRef = useRef();
  const passwordRef = useRef();

  

  async function handleSignup() {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("ERROR!");
    }
    setLoading(false);
  }

  async function handleLogOut() {
    setLoading(true);
    try {
      await logOut();
    } catch {
      alert("Error");
    }
    setLoading(false);
  }

  async function handleLogIn() {
    setLoading();
    try {
      await logIn(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("!ERROR");
    }
    setLoading(false);
  }


  return (
    <MyContext.Provider
      value={{ kartItems, setKartItems, itemQuantityAndIndexInfo, loading, setLoading, currentUser, handleSignup, handleLogIn, handleLogOut, emailRef, passwordRef, auth }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;
