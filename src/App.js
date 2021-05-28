import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import About from "./components/pages/About";
import Reference from "./components/pages/Reference";
import Youtube from "./components/pages/Youtube";
import Script from "./components/pages/Script";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/About" exact component={About} />
      <Route path="/Reference" exact component={Reference} />
      <Route path="/Youtube" exact component={Youtube} />
      <Route path="/Script" exact component={Script} />
      <Route path="/Portfolio" exact component={Portfolio} />
      <Route path="/Contact" exact component={Contact} />
    </Router>
  );
}
export default App;
