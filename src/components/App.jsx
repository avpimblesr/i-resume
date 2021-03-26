import "../App.css";
import Navigation from "./Navigation";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Resume from './Resume'
import Works from './Works'
import Testimonials from './Testimonials'
import Contact from './Contact'

function App() {
  return (
    <div className="App header">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>

        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/works">
          <Works />
        </Route>
        <Route path="/testimonials">
          <Testimonials />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
