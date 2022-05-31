import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import News from "./components/News/News";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
export default class App extends Component {
  apiKey= process.env.REACT_APP_NEWS_API
  render() {
    return (
      <div className="container">
        <Router>
          <Navbar/>
          <Switch>
            {/* <Route exact path="/"><News key="1" category="general"/></Route>
            <Route exact path="/general"><News key="2" category="general"/></Route> */}
            <Route exact path="/"><News apiKey={this.apiKey} key="1" category="general"/></Route>
            <Route exact path="/general"><News apiKey={this.apiKey} key="2" category="general"/></Route>
            <Route exact path="/business"><News apiKey={this.apiKey} key="3" category="business"/></Route>
            <Route exact path="/technology"><News apiKey={this.apiKey} key="4" category="technology"/></Route>
            <Route exact path="/science"><News apiKey={this.apiKey} key="5" category="science"/></Route>

          
          
          </Switch>
          
        </Router>
        
      </div>
    );
  }
}
