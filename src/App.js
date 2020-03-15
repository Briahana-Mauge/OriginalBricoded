import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Projects from './Components/Projects';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

const App = () => {
  return (
    <div className="app">
      <header>
        <Link to="/">Home</Link> 
        <Link to="/Projects">Projects</Link>{' '}
        <Link to="/about">About</Link>{' '}
        <Link to="/contact">Contact</Link>{' '}
      </header>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};
export default App;
