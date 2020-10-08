import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import './App.css'

import Navbar from './components/Home/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Routes from './components/Routes/Routes'

import './firebase/firebase'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
