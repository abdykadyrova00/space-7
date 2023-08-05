import React from 'react';
import {BsArrowRight} from "react-icons/bs";
import js from "./../../../assets/img/js.svg"
import ux from "./../../../assets/img/ux.svg"
import sale from "./../../../assets/img/sale.svg"
import back from "./../../../assets/img/back.svg"
import flutter from "./../../../assets/img/flutter.svg"
import {Link} from "react-router-dom";
import {useIntl} from "react-intl";

const Course = () => {
    const {formatMessage} = useIntl()

    return (
        <section id="course">
            <div className="container">
                <div className="course">
                    <h1>Курсы</h1>
                    <div className="course--courseFlex">
                        <div className="course--courseFlex__cour">
                           <label htmlFor="all"><p>Вcе направлении</p></label>
                            <label htmlFor="front"><p> Front-End develop</p></label>
                            <label htmlFor="back"><p> Back-End develop</p></label>
                            <label htmlFor="ux"><p>UX/UI Design</p></label>
                            {/*<label htmlFor="flutter"><p>Flutter</p></label>*/}
                        </div>
                        <div className="course--courseFlex__blocks">
                            <input type="radio" name="tabs" id="all"/>
                            <input type="radio" name="tabs" id="front"/>
                            <input type="radio" name="tabs" id="back"/>
                            <input type="radio" name="tabs" id="ux"/>
                            {/*<input type="radio" name="tabs" id="flutter"/>*/}

                            <div className="course--courseFlex__blocks--front  tabs-front">
                                <div className="course--courseFlex__blocks--front__cards">
                                    <div className="course--courseFlex__blocks--front__cards__cont">
                                        <button>Курс</button>
                                        <h2>Front-End</h2>
                                        <p>{formatMessage({id:"front"})}</p>
                                    </div>
                                    <div className="course--courseFlex__blocks--front__cards__logoJs">
                                        <div className="course--courseFlex__blocks--front__logoJs--js">
                                            <img src={js} alt="#"/>
                                        </div>
                                        <div className="course--courseFlex__blocks--front__logoJs--js">
                                            <img src={sale} alt="img"/>
                                        </div>

                                    </div>
                                </div>

                                <div className="course--courseFlex__blocks--front--bs">
                                    <Link to={'/front'}><p>{formatMessage({"id": "bc"})}<BsArrowRight/></p></Link>
                                </div>
                            </div>
                            <div className="course--courseFlex__blocks--front  tabs-back">

                                <div className="course--courseFlex__blocks--front__cards">
                                    <div className="course--courseFlex__blocks--front__cards__cont">
                                        <button>Курс</button>
                                        <h2>Back-End</h2>
                                        <p>{formatMessage({"id": "back"})}</p>
                                    </div>
                                    <div className="course--courseFlex__blocks--front__cards__logoJs">
                                        <div className="course--courseFlex__blocks--front__logoJs--js">
                                            <img src={ux} alt="#"/>
                                        </div>
                                        <div className="course--courseFlex__blocks--front__logoJs--js">
                                            <img src={sale} alt="img"/>
                                        </div>

                                    </div>
                                </div>

                                <div className="course--courseFlex__blocks--front--bs">
                                    <Link to={'/Backend'}><p>{formatMessage({"id": "bc"})}<BsArrowRight/></p></Link>
                                </div>

                            </div>
                            <div className="course--courseFlex__blocks--front  tabs-ux">
                                <div className="course--courseFlex__blocks--front__cards">
                                    <div className="course--courseFlex__blocks--front__cards__cont">
                                        <button>Курс</button>
                                        <h2>UX/UI Designer</h2>
                                        <p>
                                            {formatMessage({"id": "ux"})}</p>
                                    </div>
                                    <div className="course--courseFlex__blocks--front__cards__logoJs">
                                        <div className="course--courseFlex__blocks--front__logoJs--js">
                                            <img src={back} alt="#"/>
                                        </div>
                                        <div className="course--courseFlex__blocks--front__logoJs--js">
                                            <img src={sale} alt="img"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="course--courseFlex__blocks--front--bs">
                                    <Link to={'/ux'}><p>{formatMessage({"id": "bc"})}<BsArrowRight/></p></Link>
                                </div>

                            </div>
                            {/*<div className="course--courseFlex__blocks--front  tabs-flutter">*/}
                            {/*    <div className="course--courseFlex__blocks--front__cards">*/}
                            {/*        <div className="course--courseFlex__blocks--front__cards__cont">*/}
                            {/*            <button>Курс</button>*/}
                            {/*            <h2>Flutter</h2>*/}
                            {/*            <p>{formatMessage({"id": "flutter"})}</p>*/}
                            {/*        </div>*/}
                            {/*        <div className="course--courseFlex__blocks--front__cards__logoJs">*/}
                            {/*            <div className="course--courseFlex__blocks--front__logoJs--js">*/}
                            {/*                <img src={flutter} alt="#"/>*/}
                            {/*            </div>*/}
                            {/*            <div className="course--courseFlex__blocks--front__logoJs--js">*/}
                            {/*                <img src={sale} alt="img"/>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}

                            {/*    <div className="course--courseFlex__blocks--front--bs">*/}
                            {/*        <Link to={'/flutter'}><p>{formatMessage({"id": "bc"})}<BsArrowRight/></p></Link>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Course;