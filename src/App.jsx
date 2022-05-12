import React from "react";
import Announcement from "./components/Announcements";
import Slider from "./components/slider";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Announcement />
      <Home />
      <Slider/>
    </div>
  );
};

export default App;
