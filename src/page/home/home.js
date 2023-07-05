import React from 'react';
import Hero from "./hero/hero";
import Course from "./course/course";
import Student from "./students/students";
import Mentor from "./mentors/mentors";

const Home = () => {
    return (
        <div>
           <Hero/>
            <Course/>
            <Student/>
            <Mentor/>
        </div>
    );
};

export default Home;