import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Announcements from "../components/Announcements";


const Home = () => {
    return (
        <div>
            <Announcements/>
            <Navbar/>
            <Slider/>
            
        </div>
    );
};
export default Home;