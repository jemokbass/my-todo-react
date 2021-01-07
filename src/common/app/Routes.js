import Homepage from "@/pages/Homepage/Homepage";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import SignIn from "@/features/SignIn/SignIn";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/sign-in" component={SignIn} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
