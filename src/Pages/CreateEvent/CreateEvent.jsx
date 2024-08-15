import React from "react";
import "./CreateEvent.css";
import LoggedNavbar from "../../components/LoggedNavbar/LoggedNavbar";

const CreateEvent = () => {
  return (
    <>
      <LoggedNavbar />
      <div className="CreateEvent">
        <div className="CreateEvent_top">
          <div className="CreateEvent_top_heading">
            <p>Create Event :</p>
          </div>
        </div>
        <div className="CreateEvent_form">
          <div className="CreateEvent_form_left">
            <div className="CreateEvent_form1">
              <label htmlFor="">Event Name</label>
              <input type="text" />
            </div>
            <div className="CreateEvent_form2">
              <div className="CreateEvent_form2_left">
                <label htmlFor="">Audience</label>
                <input type="text" />
              </div>
              <div className="CreateEvent_form2_right">
                <label htmlFor="">Event Category</label>
                <input type="text" />
              </div>
            </div>
            <div className="CreateEvent_form2">
              <div className="CreateEvent_form2_left">
                <label htmlFor="">Dates</label>
                <input type="text" />
              </div>
              <div className="CreateEvent_form2_right">
                <label htmlFor="">College Name</label>
                <input type="text" />
              </div>
            </div>
            <div className="CreateEvent_form1">
              <label htmlFor="">Address</label>
              <input type="text" />
            </div>
            <div className="CreateEvent_form1">
              <label htmlFor="">Tell us about your event</label>
              <textarea name="" id=""></textarea>
            </div>
          </div>
          <div className="CreateEvent_form_right">
            <div className="CreateEvent_form_right_top">
              <label htmlFor="">Add Cover image</label>
              <div className="createEvent_image">
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="CreateEvent_form2">
              <div className="CreateEvent_form2_left">
                <label htmlFor="">Sponsorship Amount (min.)</label>
                <input type="text" />
              </div>
              <div className="CreateEvent_form2_right">
                <label htmlFor="">Sponsorship Amount (max.)</label>
                <input type="text" />
              </div>
            </div>
            <div className="CreateEvent_form1">
              <label htmlFor="">Why to sponsor your event ?</label>
              <textarea name="" id="" className="textarea_Create"></textarea>
            </div>
            <div className="creteevent_right_button">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
