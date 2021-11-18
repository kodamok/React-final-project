import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./Provider/Themes/cssThemes";
import GlobalStyles from "./Styled/GlobalStyles";
import { MainContainer } from "./Styled/MainContainer.styled";
import MyProvider from "./Provider/MyContext/MyProvider";

import Home from "./Pages/Home";
import Events from "./Pages/Events"
import Contact from "./Pages/Contact"
import Art from "./Pages/Art"
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import Kart from "./Pages/Kart"

import Header from "./Components/Header";
import Footer from "./Components/Footer";


const AppRoutes = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <MyProvider>
        <MainContainer flexDirection="column">
        <Router>
            <Header />
          <Routes>
            
              <Route path="/home" element={<Home />} />
              <Route path="/art" element={<Art />} />
              <Route path="/productDetailsPage" element={<ProductDetailsPage />} />
              <Route path="/contact" element={<Contact/>} />
            
          </Routes>
          <Footer />
          </Router>
        </MainContainer>
      </MyProvider>
    </ThemeProvider>
  );
};

export default AppRoutes;
