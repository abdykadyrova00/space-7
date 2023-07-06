import React from 'react';
import Hero from "./hero/hero";
import Course from "./course/course";
import Review from "./review/review";
import About from "./about/about";
import Student from "./students/students";
import Mentor from "./mentors/mentors";


const Home = () => {
    return (
        <div>
           <Hero/>
            <About/>
            <Course/>
            <Review/>
            <Student/>
            <Mentor/>

        </div>
    );
};

export default Home;