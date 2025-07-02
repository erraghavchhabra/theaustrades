import React, { useEffect, useState } from "react";
import Hero from "../components/home/hero";
import HomeAccess from "../components/home/homeAccess";
import HomeAbout from "../components/home/homeAbout";
const Home = () => {

    return (
        <div>
            <div className="main-wrapper">
                <Hero />
               <HomeAccess />
               <HomeAbout />
            </div>
        </div>
    );
};

export default Home;
