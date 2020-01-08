import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './page/homepage/homepage.component';
const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" component={HatsPage} />
      </Switch>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
