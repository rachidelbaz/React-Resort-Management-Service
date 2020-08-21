import React from "react";
import "./App.css";
import NoFound from "./Components/NoFound";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Rooms from "./Components/Rooms";
import SingleRoom from "./Components/SingleRoom";
import Home from "./Components/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RoomProvider } from "./Context";
export default class App extends React.Component {
  render() {
    return (
      <RoomProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/Rooms" component={Rooms} />
            <Route exact path="/Rooms/:target" component={SingleRoom} />
            <Route exact path="/" component={Home} />
            <Route path="*" component={NoFound} />
          </Switch>
          <Footer />
        </Router>
      </RoomProvider>
    );
  }
}
