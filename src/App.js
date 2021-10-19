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
import SingleService from "./Components/SingleService/SingleService";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Register from "./Components/Register/Register";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div className="">
        <AuthProvider>
        <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/services'>
            <Services></Services>
          </Route>
          <Route exact path='/news'>
            <News></News>
          </Route>
          <Route exact path='/about-us'>
            <AboutUs></AboutUs>
          </Route>
          <Route exact path='/contact'>
            <Contact></Contact>
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/register'>
            <Register></Register>
          </Route>
          <PrivateRoute exact path='/service/:id'>
            <SingleService></SingleService>
          </PrivateRoute>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
