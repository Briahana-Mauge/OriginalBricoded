import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Projects from './Components/Projects';
import Home from './Components/Home';
import Home2 from './Components/Home2';
import About from './Components/About';
import Contact from './Components/Contact';
import Thread from './Components/Thread'
import NavBar from './Components/NavBar';
// import NavBar2 from './Components/NavBar2';
import Sidebar from './Components/Sidebar';
import Button from './Components/Button';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      switched: ''
    }
  }
  handleSwitch = (e) => {
    console.log(e.target.checked)
    if(this.state.switched !== true){
    this.setState({
      switched: true
    })
    console.log(true)
  } else{
  this.setState({
    switched: false
  })
  console.log(false)
}

    // e.target.value =  !this.state.switched;

  }
  render = () => {
    const { switched } = this.state;
    return (
      <>
        {switched ?
          (
          // <div className="app2">
<>
            {/* <NavBar handleSwitch={this.handleSwitch} switched = {switched}/> */}
            <Sidebar /*handleSwitch={this.handleSwitch} switched = {switched}*/ />
            {/* <Button handleSwitch = {this.handleSwitch}/> */}
            {/* <Button handleSwitch = {this.handleSwitch} switched = {true}/> */}

            {/* <label className="switch" >
                <input type="checkbox"  onChange= {this.handleSwitch} checked = {true}/>
                <span className="slider round"></span>
            </label> */}

            <Switch >
              <Route exact path="/" component={Home2} />
              <Route path="/projects" component={Projects} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/days-of-code" component={Thread} />
            </Switch>
            </>
          // </div>
          )
          :
          (<div className="app">
            <NavBar /*handleSwitch={this.handleSwitch} switched = {switched}  *//>
          <Button handleSwitch = {this.handleSwitch} switched = {switched}/>

            
            <Switch>
              <Route exact path="/" component={Home} />

              <Route path="/projects" component={Projects} />
              {/* <Route path="/about" component={About} /> */}
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
