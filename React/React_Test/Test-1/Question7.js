import React from "react";
import { BrowserRouter, Route } from "react - router - dom";
const App = () => {
  return <div>App</div>;
};
const Dashboard = () => {
  return <div>Dashboard</div>;
};
const Profile = () => {
  return <div>Profile</div>;
};
const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={App}></Route>
      <Route path="/dashboard/profile" component={Profile}></Route>{" "}
      <Route exact path="/dashboard" component={Dashboard}></Route>
    </BrowserRouter>
  );
};


// use exact with 1st and last
// or
// use switch and exact with first