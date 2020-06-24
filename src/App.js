import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Projects from './Components/Projects';
import Home from './Components/Home';
import Home2 from './Components/Home2';
import About from './Components/About';
import Contact from './Components/Contact';
import Thread from './Components/Thread'
import NavBar from './Components/NavBar';
import NavBar2 from './Components/NavBar2';
import Sidebar from './Components/Sidebar';
import './App.css';
import { connect} from 'react-redux';


const App = (props) => {
  
   
  console.log(props)
  return (
    <>
      {props.themeState.isThemeChanged ?
        (
          <>
            <NavBar2  />
            <Sidebar  />

            <Switch >
              <Route exact path="/" component={Home2} />
              <Route path="/projects" component={Projects} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/days-of-code" component={Thread} />
            </Switch>

          </>
        )
        :
        (<div className="app">
          <NavBar />
          <Sidebar   />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/days-of-code" component={Thread} />
          </Switch>
        </div>)
      }

    </>
  )

}

const mapStateToProps = (state) => {
  return state;
  
}

export default connect(mapStateToProps)(App)
