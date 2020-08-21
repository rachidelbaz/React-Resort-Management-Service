import React, { Component } from "react";
import items from "./data";
const ContextRoom = React.createContext();
class RoomProvider extends Component {
  state = {
    rooms: [],
    featuredRooms: [],
    sortedRooms: [],
    maxPrice: 0,
    minPrice: 0,
    type: "All",
    price: 0,
    Nobed: 1,
  };
  componentDidMount() {
    let rooms = items.map((item, index) => {
      return item;
    });
    let featured = rooms.filter((room) => room.featured === true);
    this.setState({ rooms, featuredRooms: featured, sortedRooms: rooms });
    if (rooms.length !== 0) {
      let maxPrice = Math.max(...rooms.map((room, index) => room.price));
      let minPrice = Math.min(...rooms.map((room) => room.price));
      this.setState({ maxPrice, minPrice });
    }
  }
  getRoom = (target) => {
    let tempRooms = this.state.rooms.find((room) => room.target === target);
    return tempRooms;
  };
  handleChange = (event) => {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({ [name]: value });
  };
  FilterFormSubmited = (event) => {
    event.preventDefault();
    let sortedRooms = items.map((room) => room);
    let { type, price, Nobed } = this.state;
    if (type !== "All") {
      sortedRooms = sortedRooms.filter((room) => room.type === type);
    }
    if (price !== 0) {
      sortedRooms = sortedRooms.filter((room) => room.price <= price);
    }
    if (Nobed !== 1) {
      sortedRooms = sortedRooms.filter((room) => room.NoBed >= Nobed);
    }
    this.setState({ sortedRooms });
  };
  render() {
    return (
      <ContextRoom.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
          FilterFormSubmited: this.FilterFormSubmited,
        }}
      >
        {this.props.children}
      </ContextRoom.Provider>
    );
  }
}
const RoomConsumer = ContextRoom.Consumer;
export { ContextRoom, RoomProvider, RoomConsumer };
