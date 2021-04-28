import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch, Route , Redirect} from "react-router-dom";
import SingUpComponent from "./components/SingupComponent/SingUpComponent";
const App: React.FC =()=> {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/signup" />
          </Route>
          <Route path="/signup">
            <SingUpComponent/>
          </Route>
        </Switch>
      </Router>

  );
}

export default App;
