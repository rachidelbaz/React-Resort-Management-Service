import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapPin,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <section className="Footer">
      <div className="container-sub pt-50 mx-n2 p-4">
        <div className="row p-2 h-90">
          <div className="col-md-4 text-center">
            <h3>Resort Management</h3>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi
            </p>
            <a className="font-weight-bold btn" href="#">
              More About Us
            </a>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <div>
              <ul className="footer-widget">
                <li>
                  <FontAwesomeIcon icon={faMapPin} /> Res Esafa Gh 8 imm 8 Nr
                  752 Casablanca,Maroc
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} /> +212 699 07 31 25
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} /> rachiddelbaz@gmail.com
                </li>
              </ul>
              <ul className="footer-socialMedia">
                <li>
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </li>
                <li>
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </li>
                <li>
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </li>
                <li>
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </li>
                <li>
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-2 footer-copyright h-10">
          <div className="float-left">
            <span>Copyright © August 2020. All rights reserved.</span>
          </div>
          <div className="float-right">
            <span>Created by: EL BAZ Rachid</span>
          </div>
        </div>
      </div>
    </section>
  );
}
