import React from 'react';
import './App.css';
import Home from './components/home/home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CategoriesHome from './components/categories/categoriesHome';
import CategoryDetails from './components/categories/categoryDetails';
import Cart from './components/cart/cart';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Menu /> */}
        <Switch>
          <Route exact path="/" component = {Home}/>
          <Route exact path="/categories" component={CategoriesHome} />
          <Route exact path="/categoryDetails" component={CategoryDetails} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
