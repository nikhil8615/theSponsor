import React from "react";
import "./LoggedInMessage.css";
import LoggedNavbar from "../../components/LoggedNavbar/LoggedNavbar";
import img3 from "../../assets/Rectangle 35.png";
import img1 from "../../assets/Ellipse3.png";
import img2 from "../../assets/Vector.png";
import { Link } from "react-router-dom";

const LoggedInMessage = () => {
  return (
    <>
      <div className="LoggedNavbar">
        <div className="navbar_left">
          <div className="navbar_left_text">
            <Link to={"/home"}>
              <p>TheSponsorSource</p>
            </Link>
          </div>
        </div>
        <div className="loggedNavbar_right">
          <Link to={"/message"}>
            <div className="loggedNavbar_right_left">
              <img src={img2} alt="" />
            </div>
          </Link>
          <div className="loggedNavbar_right_med">
            <Link>UserName</Link>
          </div>
          <div className="loggedNavbar_right_right">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
      <div className="LoggedInMessage">
        <div className="LoggedInMessage_top">
          <div className="LoggedInMessage_heading">
            <p>Inbox :</p>
          </div>
        </div>
        <div className="LoggedInMessage_bot">
          <Link to="/message-details">
            <div className="LoggedInMessage_bot_left">
              <div className="LoggedInMessage_bot_left_img">
                <img src={img3} alt="" />
              </div>
              <div className="LoggedInMessage_bot_left_left">
                <div className="LoggedInMessage_bot_left_left_top">
                  <p>Event Name</p>
                  <input type="checkbox" />
                </div>
                <div className="LoggedInMessage_bot_left_left_med">
                  <p>
                    Track campaign performance and see the direct impact of your
                    sponsorships.
                  </p>
                  <a href="">+23 Sponsor Requests</a>
                  <p>₹5,000 - ₹25,000 </p>
                </div>
              </div>
            </div>
          </Link>
          <Link>
            <div className="LoggedInMessage_bot_left">
              <div className="LoggedInMessage_bot_left_img">
                <img src={img3} alt="" />
              </div>
              <div className="LoggedInMessage_bot_left_left">
                <div className="LoggedInMessage_bot_left_left_top">
                  <p>Event Name</p>
                  <input type="checkbox" />
                </div>
                <div className="LoggedInMessage_bot_left_left_med">
                  <p>
                    Track campaign performance and see the direct impact of your
                    sponsorships.
                  </p>
                  <a href="">+23 Sponsor Requests</a>
                  <p>₹5,000 - ₹25,000 </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoggedInMessage;
