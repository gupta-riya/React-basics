
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './MyComponents/Header';
import Home from './MyComponents/Home';
import About from './MyComponents/About';
import Tour from './MyComponents/Tour';

function App() {

  


  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route exact path = "/" component = {Home}></Route>
          <Route path = "/about" component = {About}></Route>
          <Route path = "/tour" component = {Tour} ></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
