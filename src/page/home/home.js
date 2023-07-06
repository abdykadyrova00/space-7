import React from 'react';
import Hero from "./hero/hero";
import Course from "./course/course";
import Review from "./review/review";
import About from "./about/about";

const Home = () => {
    return (
        <div>
           <Hero/>
            <About/>
            <Course/>
            <Review/>
        </div>
    );
};

export default Home;