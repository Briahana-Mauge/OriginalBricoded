import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Projects from './Components/Projects';
import Home from './Components/Home';
import Home2 from './Components/Home2';
import About from './Components/About';
import Contact from './Components/Contact';
import Thread from './Components/Thread'
import NavBar from './Components/NavBar';
// import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      switched: false
    }
  }
  handleSwitch = (e) => {
    this.setState({
      switched: !this.state.switched
    })
  }
  render = () => {
    const { switched } = this.state;
    return (
      <>
        {switched ?
          (<div className="app2">

            <NavBar handleSwitch={this.handleSwitch} />
            <Switch >
              <Route exact path="/" component={Home2} />
              <Route path="/Projects" component={Projects} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/days-of-code" component={Thread} />
            </Switch>
          </div>)
          :
          (<div className="app">
            <NavBar handleSwitch={this.handleSwitch} />
            <Switch>
              <Route exact path="/" component={Home} />

              <Route path="/Projects" component={Projects} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/days-of-code" component={Thread} />
            </Switch>
          </div>)
        }



      </>
    )
  }
}
// const App = () => {
//   return (
//     <div className="app">
//     <NavBar />
//       <Switch>
//         <Route exact path="/" component={Home2} />
//         <Route path="/Projects" component={Projects} />
//         <Route path="/about" component={About} />
//         <Route path="/contact" component={Contact} />
//         <Route path="/days-of-code" component={Thread} />
//       </Switch>
//     </div>
//   );
// };
export default App;
