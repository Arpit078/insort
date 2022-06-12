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
            <Route exact path="/"><News apiKey={this.apiKey} key="2" category="Headlines"/></Route>
            <Route exact path="/Headlines"><News apiKey={this.apiKey} key="2" category="Headlines"/></Route>
            <Route exact path="/Business-News"><News apiKey={this.apiKey} key="3" category="Business"/></Route>
            <Route exact path="/Startup-News"><News apiKey={this.apiKey} key="4" category="Startup"/></Route>
            <Route exact path="/Finance-NEws"><News apiKey={this.apiKey} key="5" category="Finance"/></Route>

          
          
          </Switch>
          
        </Router>
        
      </div>
    );
  }
}
