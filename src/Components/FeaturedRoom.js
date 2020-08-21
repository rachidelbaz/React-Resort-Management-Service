import React, { Component } from "react";
import { ContextRoom } from "../Context";
import Rooms from "./Room";
export default class FeaturedRoom extends Component {
  static contextType = ContextRoom;
  render() {
    return <Rooms rooms={this.context.featuredRooms}></Rooms>;
  }
}
