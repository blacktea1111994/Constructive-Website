import React from "react";
import { hot } from "react-hot-loader";
import { Route, Switch } from "react-router";
import "./App.scss";
import ContentWrap from "./components-lib/ContentWrap/ContentWrap";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { MenuProvider } from "./hooks/menuContext";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <MenuProvider>
      <Header />
      <ContentWrap>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={About} path="/about" />
        </Switch>
      </ContentWrap>
      <Footer />
    </MenuProvider>
  );
};

export default hot(module)(App);
