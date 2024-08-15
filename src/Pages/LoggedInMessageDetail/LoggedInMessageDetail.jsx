import React from "react";
import "./LoggedInMessageDetail.css";
import { Link } from "react-router-dom";
import img3 from "../../assets/Rectangle 35.png";
import img1 from "../../assets/Ellipse3.png";
import img2 from "../../assets/Vector.png";

const LoggedInMessageDetail = () => {
  return (
    <div className="loggedInDetailsMessage">
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
      <div className="loggedInDetailsMessage_top">
        <div className="LoggedInMessage_top">
          <div className="LoggedInMessage_heading">
            <p>Inbox :</p>
          </div>
        </div>
      </div>
      <div className="loggedInMessageDetails_bot">
        <div className="loggedInMessageDetails_bot_top">
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
        </div>
        <div className="loggedInMessageDetails_bot_bot">
          <div className="loggedInMessageDetails_bot_bot1">
            <div className="loggedInMessageDetails_bot_bot_img">
              <img src={img1} alt="" />
            </div>
            <div className="loggedInMessageDetails_bot_bot_para">
              <p>Sponsor</p>
              <p>Track campaign performance and see the....</p>
            </div>
          </div>
          <div className="loggedInMessageDetails_bot_bot1">
            <div className="loggedInMessageDetails_bot_bot_img">
              <img src={img1} alt="" />
            </div>
            <div className="loggedInMessageDetails_bot_bot_para">
              <p>Sponsor</p>
              <p>Track campaign performance and see the....</p>
            </div>
          </div>
          <div className="loggedInMessageDetails_bot_bot1">
            <div className="loggedInMessageDetails_bot_bot_img">
              <img src={img1} alt="" />
            </div>
            <div className="loggedInMessageDetails_bot_bot_para">
              <p>Sponsor</p>
              <p>Track campaign performance and see the....</p>
            </div>
          </div>
          <div className="loggedInMessageDetails_bot_bot1">
            <div className="loggedInMessageDetails_bot_bot_img">
              <img src={img1} alt="" />
            </div>
            <div className="loggedInMessageDetails_bot_bot_para">
              <p>Sponsor</p>
              <p>Track campaign performance and see the....</p>
            </div>
          </div>
          <div className="loggedInMessageDetails_bot_bot1">
            <div className="loggedInMessageDetails_bot_bot_img">
              <img src={img1} alt="" />
            </div>
            <div className="loggedInMessageDetails_bot_bot_para">
              <p>Sponsor</p>
              <p>Track campaign performance and see the....</p>
            </div>
          </div>
          <div className="loggedInMessageDetails_bot_bot1">
            <div className="loggedInMessageDetails_bot_bot_img">
              <img src={img1} alt="" />
            </div>
            <div className="loggedInMessageDetails_bot_bot_para">
              <p>Sponsor</p>
              <p>Track campaign performance and see the....</p>
            </div>
          </div>
          <div className="loggedInMessageDetails_bot_bot1">
            <div className="loggedInMessageDetails_bot_bot_img">
              <img src={img1} alt="" />
            </div>
            <div className="loggedInMessageDetails_bot_bot_para">
              <p>Sponsor</p>
              <p>Track campaign performance and see the....</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoggedInMessageDetail;
