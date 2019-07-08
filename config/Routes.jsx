import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//import SelectClass from "../StudentResponse/SelectClass";
import Confirm from "../StudentResponse/Confirm";
import SelectStatus from "../StudentResponse/SelectStatus";
import SelectUser from "../StudentResponse/SelectUser";
import SelectQuestion from "../StudentResponse/SelectQuestion";
import SelectClass from "../StudentResponse/SelectClass";
//import Review from "../review/simple";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/StudentResponse" component={StudentResponse} /> */}
        <Route path="/SelectClass" component={SelectClass} />
        <Route path="/SelectUser" component={SelectUser} /> 
        <Route path="/SelectQuestion" component={SelectQuestion} /> 
        <Route path="/SelectStatus" component={SelectStatus} /> 
        <Route path="/Confirm" component={Confirm} />
        {/* <Route component={Review} /> */}
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
