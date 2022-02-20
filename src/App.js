import "./App.css";

import { Route, Switch } from "react-router-dom";

import LoginPage from "./pages/login-page/login-page";
import Homepage from "./pages/homepage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
