import React from 'react';
import './App.css';
import Home from './components/home/home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CategoriesHome from './components/categories/categoriesHome';
import CategoryDetails from './components/categories/categoryDetails';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Menu /> */}
        <Switch>
          <Route exact path="/" component = {Home}/>
          <Route exact path="/categories" component={CategoriesHome} />
          <Route exact path="/categoryDetails" component={CategoryDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
