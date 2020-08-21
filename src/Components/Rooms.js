import React, { Component } from "react";
import Header from "./Header";
import { ContextRoom } from "../Context";
import Room from "./Room";
import FilterRooms from "./FilterRooms";
export default class Rooms extends Component {
  static contextType = ContextRoom;
  render() {
    return (
      <>
        <Header session="Rooms-Header" flag="Rooms" />
        <section className="body-section">
          <FilterRooms rooms={this.context.rooms}></FilterRooms>
          <div className="container ">
            <div className="row">
              <Room rooms={this.context.sortedRooms} />
            </div>
          </div>
        </section>
      </>
    );
  }
}
