import React from "react";
import { Link } from "react-router-dom";
export default function Room({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="display-4">
              <h1>No room is found ...!</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return rooms.map((room, index) => (
    <article key={index} className="card col-md-4 mb-2">
      <img className="card-img-top" src={room.imgUrl} alt="room img" />
      <div className="card-body">
        <h5 className="card-title">{room.name}</h5>
        <p className="card-texte">{room.description}</p>
      </div>
      <div className="card-footer">
        <Link
          to={`/Rooms/${room.target}`}
          className="btn btn-outline-primary float-right"
        >
          Book Now
        </Link>
      </div>
    </article>
  ));
}
