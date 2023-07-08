import React, {useState, useEffect} from 'react';
import {FiInstagram} from "react-icons/fi";
import {AiFillLinkedin} from "react-icons/ai";
import Slider from "react-slick";
import {useIntl} from "react-intl";

import brat from './../../../assets/img/brat.svg'
import * as PropTypes from "prop-types";

Slider.propTypes = {children: PropTypes.node};

const Mentor = () => {
    const {formatMessage} = useIntl()
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        autoplay:true,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section id="mentor">
            <div className="container">
                <div className="mentor">

                    <h1>Наши менторы</h1>

                    <Slider {...settings}>

                        <div className="mentor--mentorBlock">
                            <img src={brat} alt=""/>

                            <div className="mentor--mentorBlock__textMentor">
                                <h4>Баланчаев Тукунчо</h4>
                                <h6>UX/UI Designer</h6>
                            </div>
                        </div>

                        <div className="mentor--mentorBlock">
                            <img src={brat} alt=""/>
                            <div className="mentor--mentorBlock__textMentor">
                                <h4>Баланчаев Тукунчо</h4>
                                <h6>UX/UI Designer</h6>
                            </div>
                        </div>

                        <div className="mentor--mentorBlock">
                            <img src={brat} alt=""/>
                            <div className="mentor--mentorBlock__textMentor">
                                <h4>Баланчаев Тукунчо</h4>
                                <h6>UX/UI Designer</h6>
                            </div>
                        </div>

                        <div className="mentor--mentorBlock">
                            <img src={brat} alt=""/>
                            <div className="mentor--mentorBlock__textMentor">
                                <h4>Баланчаев Тукунчо</h4>
                                <h6>UX/UI Designer</h6>
                            </div>
                        </div>

                        <div className="mentor--mentorBlock">
                            <img src={brat} alt=""/>
                            <div className="mentor--mentorBlock__textMentor">
                                <h4>Баланчаев Тукунчо</h4>
                                <h6>UX/UI Designer</h6>
                            </div>
                        </div>

                        <div className="mentor--mentorBlock">
                            <img src={brat} alt=""/>
                            <div className="mentor--mentorBlock__textMentor">
                                <h4>Баланчаев Тукунчо</h4>
                                <h6>UX/UI Designer</h6>
                            </div>
                        </div>

                    </Slider>

                </div>
            </div>

        </section>
    );
};

export default Mentor;