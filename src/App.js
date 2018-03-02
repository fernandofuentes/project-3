import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Panel from "./components/Panel";
import SignupPortal from "./components/SignupPortal";

const App = () => (
  <div className="container">
    <Navbar />
    <SignupPortal />
    <Panel />
  </div>
);

export default App;
