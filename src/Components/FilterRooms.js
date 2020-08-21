import React, { useContext } from "react";
import { ContextRoom, RoomConsumer } from "../Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
/*function return unisque values*/
const getUniqueValue = (items, prop) => {
  return [...new Set(items.map((item) => item[prop]))];
};
/*main function*/
export default function FilterRooms({ rooms }) {
  /*context*/
  const context = useContext(ContextRoom);
  let { minPrice, maxPrice, price, handleChange, FilterFormSubmited } = context;
  /*get unique values for beds*/
  let Nobeds;
  if (getUniqueValue(rooms, "NoBed").length !== 0) {
    Nobeds = getUniqueValue(rooms, "NoBed").sort();
  }
  /*get unique values for type*/
  let Types;
  if (getUniqueValue(rooms, "type").length !== 0) {
    Types = getUniqueValue(rooms, "type");
  }

  return (
    <>
      <div className="container form-filter-container">
        {/* <div
          className={
            active
              ? "filter-icon-container filter-icon-active"
              : "filter-icon-container"
          }
          onClick={() => {
            setActiveFilter(!active);
            console.log(active);
          }}
        >
          <FontAwesomeIcon
            icon={faSlidersH}
            className="filter-icon"
            size="2x"
          ></FontAwesomeIcon>
        </div> */}
        <h1>Filter</h1>
        <div className="sub-title"></div>
        <form onSubmit={FilterFormSubmited} className="row">
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="type">Type</label>
              <select
                name="type"
                onChange={handleChange}
                className="form-control"
              >
                <option>All</option>
                {Types &&
                  Types.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="price">
                Price $<b> {price > 0 ? price : maxPrice}</b>
              </label>
              <input
                onChange={handleChange}
                className="price-range-picker "
                name="price"
                type="range"
                min={minPrice}
                max={maxPrice}
                step="1"
                value={price > 0 ? price : maxPrice}
              ></input>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="Nobed">Beds</label>
              <select
                name="Nobed"
                onChange={handleChange}
                className="form-control"
              >
                {Nobeds &&
                  Nobeds.map((beds, index) => (
                    <option key={index} value={beds}>
                      {beds}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="col-md-3 d-flex justify-content-end">
            <button
              type="submit"
              className="btn btn-outline-dark btn-filter text-dark"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
