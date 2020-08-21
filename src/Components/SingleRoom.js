import React, { Component } from "react";
import { ContextRoom } from "../Context";
import Carousel from "react-bootstrap/Carousel";
import Header from "./Header";

export default class SingleRoom extends Component {
  static contextType = ContextRoom;
  constructor(props) {
    super(props);
    this.state = {
      target: this.props.match.params.target,
    };
  }

  render() {
    const room = this.context.getRoom(this.state.target);
    if (!room) {
      return (
        <section className="body-section">
          <div className="container ">
            <div className="row">
              <div className="col-md-12">
                <h1>Room not found ...!</h1>
              </div>
            </div>
          </div>
        </section>
      );
    }
    return (
      <>
        <Header session="Room-Header" flag="Room" />
        <section className="body-section">
          <div className="container ">
            <div className="row">
              <div className="col-md-6">
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="w-100"
                      src={room.imgUrl}
                      alt="first slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="w-100"
                      src={room.imgUrl}
                      alt="secound slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="w-100"
                      src={room.imgUrl}
                      alt="theerd slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="col-md-6">
                <h1>Info</h1>
                <div className="border-left  border-info h-75">
                  <h4 className="pl-2">{room.name}</h4>
                  <h4 className="pl-2">
                    Type: <span>{room.type}</span>
                  </h4>
                  <h4 className="pl-2">
                    Price: <span>{room.price} $/Night</span>
                  </h4>
                  <h4 className="pl-2">
                    Beds: <span>{room.NoBed} </span>
                  </h4>
                  <p className="pl-2">{room.description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
