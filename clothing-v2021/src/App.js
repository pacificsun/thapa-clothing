import { Route, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

const HatPage = () => (
  <div>
    <h1>HAT PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatPage} />
      </Switch>
    </div>
  );
}

export default App;
