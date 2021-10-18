import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from "./Components/Header/NavBar";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Services from './Components/Services/Services';
import News from './Components/News/News';
import AboutUs from './Components/About Us/AboutUs'
import NotFound from "./Components/NotFound/NotFound";
import Login from "./Components/Login/Login";


function App() {
  return (
    <div className="">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/news'>
            <News></News>
          </Route>
          <Route path='/about-us'>
            <AboutUs></AboutUs>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
