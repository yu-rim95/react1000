import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import About from "./components/pages/About";
import Reference from "./components/pages/Reference";
import Youtube from "./components/pages/Youtube";
import Scropt from "./components/pages/Scropt";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/About" exact component={About} />
      <Route path="/Reference" exact component={Reference} />
      <Route path="/Youtube" exact component={Youtube} />
      <Route path="/Scropt" exact component={Scropt} />
      <Route path="/Portfolio" exact component={Portfolio} />
      <Route path="/Contact" exact component={Contact} />
    </Router>
  );
}
export default App;
