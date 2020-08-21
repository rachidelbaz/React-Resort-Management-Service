import React, { Component } from "react";
import Header from "./Header";
import HotelRoom from "../images/hotel-room.png";
import Gym from "../images/gym.png";
import Dinner from "../images/dinner.png";
import Food from "../images/food.png";
import SwimmingPool from "../images/swimming-pool.png";
import Parking from "../images/parking.png";
import Cooker from "../images/cook.png";
import NightClub from "../images/dj.png";
import FeaturedRoom from "./FeaturedRoom";
export default class Home extends Component {
  state = {
    services: [
      {
        id: 1,
        imgUrl: HotelRoom,
        title: "First class Rooms",
      },
      {
        id: 2,
        imgUrl: Gym,
        title: "Luxury Fitness",
      },
      {
        id: 3,
        imgUrl: Dinner,
        title: "Service Room",
      },
      {
        id: 4,
        imgUrl: Food,
        title: "Delicius Food",
      },
      {
        id: 5,
        imgUrl: SwimmingPool,
        title: "Exclusive Swimming pool",
      },
      {
        id: 6,
        imgUrl: Parking,
        title: "Free Parking",
      },
      {
        id: 7,
        imgUrl: Cooker,
        title: "Restaurant",
      },
      {
        id: 8,
        imgUrl: NightClub,
        title: "Great Night Club",
      },
    ],
  };
  render() {
    return (
      <>
        <Header />
        <section className="body-section">
          <div className="container ">
            <div className="row">
              <div className="col-md-12">
                <h1>Welcome</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
          <div className="conatiner">
            <h1>Our Services</h1>
            <div className="row">
              <div className="col-md-12">
                <ul className="service-categories">
                  {this.state.services.map((service, index) => {
                    return (
                      <li key={index} className="service-category">
                        <a href="#">
                          <div className="service-icon">
                            <img
                              src={service.imgUrl}
                              alt={service.imgUrl}
                            ></img>
                          </div>
                          <div className="service-caption">
                            <h4>{service.title}</h4>
                            <span className="service-detail">
                              Ckeck Details
                            </span>
                          </div>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="Featured-Rooms mt-5">
          <div className="container">
            <h1 className="text-dark mb-3">Our Rooms & Suits </h1>
            <div className="row">
              <FeaturedRoom></FeaturedRoom>
            </div>
            <div className="row mt-2">
              <div className="col-12">
                <button className="btn btn-outline-dark float-right">
                  See all rooms
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
