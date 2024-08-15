import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ForCollege from "./Pages/ForColleges/ForCollege";
import ForSponsorbutton from "./Pages/ForSponsor_button/ForSponsorbutton";
import GetStart from "./Pages/GetStartedPage/GetStart";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomeLoggedInpage from "./Pages/HomeLoggedInpage/HomeLoggedInpage";
import LoggedInMessage from "./Pages/LoggedInMessage/LoggedInMessage";
import LoggedInProfileEdit from "./Pages/LoggedInProfileEdit/LoggedInProfileEdit";
import CreateEvent from "./Pages/CreateEvent/CreateEvent";
import LoggedInMessageDetail from "./Pages/LoggedInMessageDetail/LoggedInMessageDetail";
import EventDetailsPage from "./Pages/EventDetailsPage/EventDetailsPage";
import DiscoverEvent from "./Pages/DiscoverEvent/DiscoverEvent";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forCollege" element={<ForCollege />} />
        <Route path="/forSponsors" element={<ForSponsorbutton />} />
        <Route path="/getStart" element={<GetStart />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/home" element={<HomeLoggedInpage />} />
        <Route path="/message" element={<LoggedInMessage />} />
        <Route path="/editProfile" element={<LoggedInProfileEdit />} />
        <Route path="/createEvent" element={<CreateEvent />} />
        <Route path="/message-details" element={<LoggedInMessageDetail />} />
        <Route path="/eventDetails" element={<EventDetailsPage />} />
        <Route path="/discover" element={<DiscoverEvent />} />
      </Routes>
    </>
  );
};

export default App;
