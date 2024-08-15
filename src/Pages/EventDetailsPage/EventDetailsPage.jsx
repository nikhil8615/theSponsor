import React from "react";
import "./EventDetailsPage.css";
import LoggedNavbar from "../../components/LoggedNavbar/LoggedNavbar";
import img1 from "../../assets/Rectangle37.png";

const EventDetailsPage = () => {
  return (
    <>
      <LoggedNavbar />
      <div className="EventDetailsPage">
        <div className="EventDetailsPage_top">
          <div className="EventDetailsPage_top_left">
            <img src={img1} alt="" />
          </div>
          <div className="EventDetailsPage_top_right">
            <div className="EventDetailsPage_top_right_top">
              <p>Fri, Jul 19 - Sun, Jul 21 2024</p>
              <div className="EventDetailsPage_top_right_top_med">
                <p>Event Name</p>
                <input type="checkbox" name="" id="" />
              </div>
              <div className="EventDetailsPage_top_right_top_bot">
                <p>VIT Bhopal University, Bhopal</p>
                <p>₹5,000 - ₹25,000 </p>
              </div>
              <div className="EventDetailsPage_top_right_top_button">
                <button>Sponsor Now</button>
              </div>
            </div>
            <div className="EventDetailsPage_top_right_bot">
              <p>Organizer/Club Name</p>
            </div>
          </div>
        </div>
        <div className="EventDetailsPage_med"></div>
        <div className="EventDetailsPage_bot">
          <div className="EventDetailsPage_bot_left">
            <div className="EventDetailsPage_bot_left_heading">
              <p>About the event :</p>
            </div>
            <div className="EventDetailsPage_bot_left_points">
              <p>Find Sponsors with Ease:</p>
              <ul>
                <li>
                  Effortless Listing: Create detailed event profiles
                  highlighting your target audience, goals, and sponsorship
                  opportunities.
                </li>
                <li>
                  Wide Reach: Gain access to a network of pre-vetted sponsors
                  actively seeking to support college events.
                </li>
                <li>
                  Streamlined Communication: Communicate directly with
                  interested sponsors through secure messaging within the
                  platform
                </li>
              </ul>
              <p>Manage Sponsorships Efficiently:</p>
              <ul>
                <li>
                  Centralized Hub: Manage all sponsorship inquiries,
                  negotiations, and agreements in one convenient location.
                </li>
                <li>
                  Track Your Progress: Gain valuable insights into sponsor
                  interest and track the performance of your event listing.
                </li>
                <li>
                  Free Platform: There's no cost to list your event on
                  SponsorMyEvent. We only charge a 10% commission on
                  successfully secured
                </li>
              </ul>
            </div>
          </div>
          <div className="EventDetailsPage_bot_right">
            <div className="EventDetailsPage_bot_right_heading">
              <p>Contact Organizer</p>
            </div>
            <div className="EventDetailsPage_bot_right_form">
              <div className="EventDetailsPage_bot_right_form1">
                <label htmlFor="">Company Name</label>
                <input type="text" />
              </div>
              <div className="EventDetailsPage_bot_right_form2">
                <div className="EventDetailsPage_bot_right_form2_left">
                  <label htmlFor="">First Name</label>
                  <input type="text" />
                </div>
                <div className="EventDetailsPage_bot_right_form2_right">
                  <label htmlFor="">Last Name</label>
                  <input type="text" />
                </div>
              </div>

              <div className="EventDetailsPage_bot_right_form1">
                <label htmlFor="">Email</label>
                <input type="email" />
              </div>
              <div className="EventDetailsPage_bot_right_form1">
                <label htmlFor="">Mobile</label>
                <input type="number" />
              </div>
              <div className="EventDetailsPage_bot_right_form1">
                <label htmlFor="">Message</label>
                <textarea name="" id=""></textarea>
              </div>
              <div className="EventDetailsPage_bot_right_form_text">
                <input type="checkbox" name="" id="" />
                <p>
                  Hereby I agree to be contacted by SponsorMyEvents on behalf of
                  the organizer either by email or phone
                </p>
              </div>
              <div className="EventDetailsPage_bot_right_form_submit">
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetailsPage;
