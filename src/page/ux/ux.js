
import React, {useEffect} from 'react';
import Accordion from "../../components/accordion/accordion";
import brat1 from './../../assets/img/brat.svg'
import icon1 from  './../../assets/img/icon1.svg'
import icon2 from  './../../assets/img/icon2.svg'
import icon3 from  './../../assets/img/icon3.svg'
import icon4 from  './../../assets/img/icon4.png'
import icon5 from  './../../assets/img/icon5.svg'
import {useIntl} from "react-intl";
import html from './../../assets/img/html.png'

import fon from './../../assets/img/fon.jpg'
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import {Link} from "react-router-dom";
import str from "../../assets/img/str.svg";


const Ux = () => {
    const {formatMessage} = useIntl()
    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    const myNumber = +996224192939

    return (
        <section id="ux">
            <div className="detail_page">
                <div className="container">
                    <Link to={'/'}><img src={str} alt="img"/></Link>
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
                <div className="ux">
                    <div>
                        <div className="ux--backFlex">
                            <div className="ux--backFlex__blocks">
                                <div className="ux--backFlex__blocks--detail">
                                    <h1>{formatMessage({id:"program"})}</h1>
                                    <p>{formatMessage({id:"space"})}</p>
                                    <Accordion
                                        title={formatMessage({id:"introduction"})}
                                        content={formatMessage({id:"com"})}
                                    />
                                    <Accordion
                                        title={formatMessage({id:"ux-ui"})}
                                        content={formatMessage({id:"tex"})}
                                    />
                                    <Accordion
                                        title={formatMessage({id:"ui"})}
                                        content={formatMessage({id:"ana"})}
                                    />

                                    <Accordion
                                        title={formatMessage({id:"accordion"})}
                                        content={formatMessage({id:"acc"})}
                                    />
                                    <Accordion
                                        title={formatMessage({id:"logo"})}
                                        content={formatMessage({id:"viz"})}
                                    />
                                    <Accordion
                                        title={formatMessage({id:"page"})}
                                        content={formatMessage({id:"pag"})}
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
                            </div>
                        </div>

                        <div className="ux--diploma">
                            <h1>{formatMessage({id:"project"})}</h1>
                            <p>1. Лендинг</p>
                            <p>2. Сайт</p>
                            <p>3. Интернет-магазин</p>
                            <p>4. Трекер задач по системе «Помодоро»
                            </p>
                        </div>

                        <div className="ux--mentors">
                            <h1>{formatMessage({id:"mentors"})}</h1>
                            <div className="ux--mentors__group">
                                <div className="ux--mentors__group--mentorPhoto">
                                    <img src={brat1} alt=""/>
                                    <div className="ux--mentors__group--mentorPhoto__fio">
                                        <h4>Баланчаев Тукунчо</h4>
                                        <h4>UX/UI Designer</h4>
                                    </div>
                                </div>
                                <div className="ux--mentors__group--mentorPhoto">
                                    <img src={brat1} alt=""/>
                                    <div className="ux--mentors__group--mentorPhoto__fio">
                                        <h4>Баланчаев Тукунчо</h4>
                                        <h4>UX/UI Designer</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ux--question">
                            <h1>{formatMessage({id:"why"})}</h1>
                            <div className="ux--question__questionFlex">
                                <div className="ux--question__questionFlex--icons">
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
                                <div className="ux--question__questionFlex--textQuestion">
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
                    <div className="ux--block">
                        <div className="ux--block__textCourse">
                            <span>Курс</span>
                            <h1>UX/UI DEVELOPER</h1>
                            <p>
                                {formatMessage({id:"block"})}
                            </p>
                            <h1>{formatMessage({id:"price"})}</h1>
                            <a href={`https://wa.me/${myNumber}?text=%20Саламатсызбы%20мен%20курстар%20%20боюунча малымат алайын дегем%20`}>{formatMessage({id:"enroll"})}</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
};

export default Ux;