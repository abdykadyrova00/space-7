import React from 'react';
import ellipse from "./../../../assets/img/ellipse.png"
import ellipse2 from "./../../../assets/img/ellipse2.png"
import ellipse3 from "./../../../assets/img/ellipse3.png"
import ellipse4 from "./../../../assets/img/ellipse4.png"
import Slider from "react-slick";

import * as PropTypes from "prop-types";

Slider.propTypes = {children: PropTypes.node};
const Review = () => {
<<<<<<< HEAD

=======
>>>>>>> e811806b1f880f643e355b655b29bb469106017b
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
<<<<<<< HEAD
        slidesToShow: 4,
        autoplay:true,
        slidesToScroll: 4,
=======
        slidesToShow: 3,
        slidesToScroll: 3,
>>>>>>> e811806b1f880f643e355b655b29bb469106017b
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
        <section id="review">
            <div className="container">
                <h1>Что говорят наши студенты?</h1>
                <div className="review">
                    <Slider {...settings}>
                    <div className="review--group">
                        <p>За 7 месяцев я научился очень
                            многому. После курса они
                            помогли найти работу в
                            IT-Компании. Огромное спасибо
                            ITSPACE
                        </p>
                        <div className="review--group__children">
                            <img src={ellipse} alt="img"/>
                            <div>
                             <h5>Жармабек</h5>
                                <h4>Front-End DESIGN</h4>
                            </div>

                        </div>

                    </div>

                    <div className="review--group">
                        <p>За 7 месяцев я научился очень
                            многому. После курса они
                            помогли найти работу в
                            IT-Компании. Огромное спасибо
                            ITSPACE
                        </p>
                        <div className="review--group__children">
                            <img src={ellipse2} alt="img"/>
                            <div>
                                <h5>Жармагул</h5>
                                <h4>Backend DESIGN</h4>
                            </div>

                        </div>

                    </div>
                    <div className="review--group">
                        <p>За 7 месяцев я научился очень
                            многому. После курса они
                            помогли найти работу в
                            IT-Компании. Огромное спасибо
                            ITSPACE
                        </p>
                        <div className="review--group__children">
                            <img src={ellipse3} alt="img"/>
                            <div>
                                <h5>Курманкожо</h5>
                                <h4>UX/UI DESIGN</h4>
                            </div>

                        </div>

                    </div>
                    <div className="review--group">
                        <p>За 7 месяцев я научился очень
                            многому. После курса они
                            помогли найти работу в
                            IT-Компании. Огромное спасибо
                            ITSPACE
                        </p>
                        <div className="review--group__children">
                            <img src={ellipse4} alt="img"/>
                            <div>
                                <h5>Жармабек</h5>
                                <h4>Flutter DESIGN</h4>
                            </div>

                        </div>

                    </div>

                        <div className="review--group">
                            <p>За 7 месяцев я научился очень
                                многому. После курса они
                                помогли найти работу в
                                IT-Компании. Огромное спасибо
                                ITSPACE
                            </p>
                            <div className="review--group__children">
                                <img src={ellipse} alt="img"/>
                                <div>
                                    <h5>Жармабек</h5>
                                    <h4>Flutter DESIGN</h4>
                                </div>

                            </div>

                        </div>

                        <div className="review--group">
                            <p>За 7 месяцев я научился очень
                                многому. После курса они
                                помогли найти работу в
                                IT-Компании. Огромное спасибо
                                ITSPACE
                            </p>
                            <div className="review--group__children">
                                <img src={ellipse2} alt="img"/>
                                <div>
                                    <h5>Жармагул</h5>
                                    <h4>Flutter DESIGN</h4>
                                </div>

                            </div>

                        </div>

                        <div className="review--group">
                            <p>За 7 месяцев я научился очень
                                многому. После курса они
                                помогли найти работу в
                                IT-Компании. Огромное спасибо
                                ITSPACE
                            </p>
                            <div className="review--group__children">
                                <img src={ellipse3} alt="img"/>
                                <div>
                                    <h5>Курманкожо</h5>
                                    <h4>Flutter DESIGN</h4>
                                </div>

                            </div>

                        </div>

                        <div className="review--group">
                            <p>За 7 месяцев я научился очень
                                многому. После курса они
                                помогли найти работу в
                                IT-Компании. Огромное спасибо
                                ITSPACE
                            </p>
                            <div className="review--group__children">
                                <img src={ellipse4} alt="img"/>
                                <div>
                                    <h5>Жармабек</h5>
                                    <h4>Flutter DESIGN</h4>
                                </div>

                            </div>

                        </div>
                </Slider>
                </div>
            </div>
        </section>
    );
};

export default Review;