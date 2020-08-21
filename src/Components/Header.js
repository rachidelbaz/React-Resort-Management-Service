import React from "react";
export default function Header({ session, flag, description }) {
  return (
    <div className={session}>
      <div className="panel">
        <h1>{flag}</h1>
        <p>{description}</p>
      </div>
      <div className="container book-stay">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Book Your Stay</h1>
            <div className="sub-title"></div>
            <form>
              <div className="container mb-2">
                <div className="row">
                  <div className="col-md-3 ">
                    <div className="form-group">
                      <label htmlFor="CheckIn">Check In</label>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="name@example.com"
                        id="CheckIn"
                      />
                    </div>
                  </div>
                  <div className="col-md-3 ">
                    <div className="form-group">
                      <label htmlFor="CheckOut">Check Out</label>
                      <input
                        type="date"
                        className="form-control"
                        id="CheckOut"
                        placeholder="name@example.com"
                      />
                    </div>
                  </div>
                  <div className="col-md-3 ">
                    <div className="form-group">
                      <label htmlFor="SelectPerson">Person</label>
                      <select className="form-control" id="SelectPerson">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-3 d-flex justify-content-end">
                    <button className="btn btn-outline-dark btn-book ">
                      Booking
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
Header.defaultProps = {
  session: "Home-Header",
  flag: "Resort Management",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
};
