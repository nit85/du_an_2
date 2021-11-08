import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Product from './pages/product';
import Contact from './pages/contact';
import News from './pages/news';


function App()  {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/product' component={Product} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/news' component={News} />
       
        
      </Switch>
    </Router>
  );
}

export default App;

