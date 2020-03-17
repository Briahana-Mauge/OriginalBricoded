import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Projects from './Components/Projects';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Thread from './Components/Thread'
import NavBar from './Components/NavBar';
import './App.css';

const App = () => {
  return (
    <div className="app">
    <NavBar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/days-of-code" component={Thread} />
      </Switch>
    </div>
  );
};
export default App;
