import React from "react";
import {
  HashRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";

import "./App.css";
import { defaultTheme } from "./Providers/Themes/cssThemes";
import GlobalStyles from "./Components/Styled/GlobalStyles";
import { MainContainer } from "./Components/Styled/MainContainer.styled";

import Home from "./Pages/Home";
import MyProvider from "./Providers/MyContext/MyProvider";
import Header from "./Components/Header";


const AppRoutes = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <MyProvider>
        <MainContainer color="green" width="1640px" margin="0 auto">
          
            <Header />
          
          <Router>
            <Switch>
              <Route path="/" element={<Home />} />
            </Switch>
          </Router>
        </MainContainer>
      </MyProvider>
    </ThemeProvider>
  );
};

export default AppRoutes;
