import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import MainPage from "./components/MainPage";
import Project from "./components/Project"
import Admin from "./components/Admin";
import Footer from "./components/Footer";
import "./App.css";

// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function App() {
  return (
    <main className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path={'/projet/:id'}>
          <Project />
        </Route>
        <Route path="/Admin">
          <Admin />
        </Route>
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
