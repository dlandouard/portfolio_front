import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage  from './components/MainPage';
import Admin  from './components/Admin';
import './App.css';

// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function App() {
  return (
    <main className="App">
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/Admin">
          <Admin />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
