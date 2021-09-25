import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import NavTab from "./components/navbar/index";
import Login from "./components/login/index";
import patientDemographic from "./components/pages/patientDemographic/index";
import PatientRecord from "./components/pages/patientRecord/index";
import Schedule from "./components/pages/schedule/index";
import Wrapper from "./components/Wrapper";




function App () {
  return (
    <Router>
      <div>
        <NavTab />
        <Wrapper>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/PatientDemographic" component={patientDemographic} />
        <Route exact path="/patientRecord" component={PatientRecord} />
        <Route exact path="/schedule" component={Schedule} />
        </Switch>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;