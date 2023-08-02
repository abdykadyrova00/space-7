
import React, {useEffect} from 'react';
import Accordion from "../../components/accordion/accordion";
import brat1 from './../../assets/img/brat.svg'
import in_img from './../../assets/img/in_img.svg'
import icon1 from  './../../assets/img/icon1.svg'
import icon2 from  './../../assets/img/icon2.svg'
import icon3 from  './../../assets/img/icon3.svg'
import icon4 from  './../../assets/img/icon4.png'
import icon5 from  './../../assets/img/icon5.svg'
import {useIntl} from "react-intl";
import html from './../../assets/img/html.png'
import js from './../../assets/img/js.svg'
import react from './../../assets/img/react.png'

import fon from './../../assets/img/fon.jpg'
import front from "../front/front";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";



const Ux = () => {
    const {formatMessage} = useIntl()
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <section id="backend">
            <div className="task">
                <div className="container">
                    <h1>UX/UI дизайнер</h1>
                    <p>
                        {formatMessage({id:"designer"})}
                    </p>
                    <ul>
                        <li>
                            {formatMessage({id:"course"})}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="backend">
                    <div>
                        <div className="backend--backFlex">
                            <div className="backend--backFlex__blocks">
                                <div className="backend--backFlex__blocks--detail">
                                    <h1>{formatMessage({id:"program"})}</h1>
                                    <p>{formatMessage({id:"space"})}</p>
                                    <Accordion
                                        title={formatMessage({id:"introduction"})}
                                        content={formatMessage({id:"ux"})}
                                    />
                                    <Accordion
                                        title={formatMessage({id:"ux-ui"})}
                                        content={formatMessage({id:"ux-content"})}
                                        text="Razia"
                                    />
                                    <Accordion
                                        title={formatMessage({id:"ui"})}
                                        content={formatMessage({id:"ux-title"})}
                                    />

                                    <Accordion
                                        title={formatMessage({id:"accordion"})}
                                        content={formatMessage({id:"title"})}
                                    />
                                    <Accordion
                                        title={formatMessage({id:"logo"})}
                                        content={formatMessage({id:"from"})}
                                    />
                                    <Accordion
                                        title={formatMessage({id:"page"})}
                                        content={formatMessage({id:"figma"})}
                                    />
                                    <Accordion
                                        title={formatMessage({id:"landing"})}
                                        content={formatMessage({id:"user"})}
                                    />
                                    <Accordion
                                        title={formatMessage({id:"shop"})}
                                        content={formatMessage({id:"shop-user"})}
                                    />
                                </div>
                                <div className="backend--block">
                                    <div className="backend--block__textCourse">
                                        <span>Курс</span>
                                        <h1>UX/UI DEVELOPER</h1>
                                        <p>
                                            {formatMessage({id:"block"})}
                                        </p>
                                        <h1>{formatMessage({id:"price"})}</h1>
                                        <a href={"#"}>{formatMessage({id:"enroll"})}</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="backend--diploma">
                            <h1>{formatMessage({id:"project"})}</h1>
                            <p>1. Landing Page </p>
                            <p>2. Сайт</p>
                            <p>3. Интернет магазин</p>
                            <p>4. С чем мы будем и как будем работать</p>
                        </div>

                        <div className="backend--mentors">
                            <h1>{formatMessage({id:"mentors"})}</h1>
                            <div className="backend--mentors__group">
                                <div className="backend--mentors__group--mentorPhoto">
                                    <img src={brat1} alt=""/>
                                    <div className="backend--mentors__group--mentorPhoto__fio">
                                        <h4>Баланчаев Тукунчо</h4>
                                        <h4>UX/UI Designer</h4>
                                    </div>
                                </div>
                                <div className="backend--mentors__group--mentorPhoto">
                                    <img src={brat1} alt=""/>
                                    <div className="backend--mentors__group--mentorPhoto__fio">
                                        <h4>Баланчаев Тукунчо</h4>
                                        <h4>UX/UI Designer</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="backend--question">
                            <h1>{formatMessage({id:"why"})}</h1>
                            <div className="backend--question__questionFlex">
                                <div className="backend--question__questionFlex--icons">
                                    <img src={icon1} alt="img"/>
                                    <div></div>
                                    <img src={icon2} alt="img"/>
                                    <div></div>
                                    <img src={icon3} alt="img"/>
                                    <div></div>
                                    <img src={icon4} alt="img"/>
                                    <div></div>
                                    <img src={icon5} alt="img"/>
                                </div>
                                <div className="backend--question__questionFlex--textQuestion">
                                    <div>
                                        <h4>{formatMessage({id:"sait"})}</h4>
                                        <p>{formatMessage({id:"icon"})}</p>
                                    </div>
                                    <div>
                                        <h4>{formatMessage({id:"notes"})}</h4>
                                        <p>{formatMessage({id:"script"})}</p>
                                    </div>
                                    <div>
                                        <h4>{formatMessage({id:"framework"})}</h4>
                                        <p>{formatMessage({id:"framework-text"})}</p>
                                    </div>
                                    <div>
                                        <h4>{formatMessage({id:"git"})}</h4>
                                        <p>{formatMessage({id:"work"})}</p>
                                    </div>
                                    <div>
                                        <h4>{formatMessage({id:"beauty"})}</h4>
                                        <p>{formatMessage({id:"student"})}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </section>




    );
};

export default Ux;