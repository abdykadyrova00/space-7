import React, {useEffect} from 'react';
import Accordion from "../../components/accordion/accordion";
import brat1 from './../../assets/img/brat.svg'
import icon1 from  './../../assets/img/icon1.svg'
import icon2 from  './../../assets/img/icon2.svg'
import icon3 from  './../../assets/img/icon3.svg'
import icon4 from  './../../assets/img/icon4.png'
import icon5 from  './../../assets/img/icon5.svg'
import {useIntl} from "react-intl";
import str from './../../assets/img/str.svg'
import {Link} from "react-router-dom";
import html from "../../assets/img/html.png";
import js from "../../assets/img/js.svg";
import react from "../../assets/img/react.png";



const Backend = () => {
     const {formatMessage}= useIntl()
    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    // language=HTML

    const myNumber = +996224192939

    return (
        <section id="backend">
            <div className="detail_page">
                <div className="container">
                   <Link to={'/'}><img src={str} alt="img"/></Link>
                    <h1>PYTHON DEVELOPER</h1>
                    <p>Вы начнете с основ верстки и JAVASCRIPT, а к концу обучения научитесь
                        делать корпоративные сервисы. Получите опыт работы в команде
                        и начнете карьеру в сфере IT как веб-разработчика</p>
                    <ul>
                        <li>После окончания курса получите сертификат и плюс трудоустройство
                            в IT-компаниях
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
                                        title="1. Веб - верстка"
                                        content={formatMessage({id:"oop"})}
                                    />
                                    <Accordion
                                        title="2. JavaScript"
                                        content={formatMessage({id:"python"})}
                                    />
                                    <Accordion
                                        title="3. React JS"
                                        content={formatMessage({id:"java"})}
                                    />
                                    <Accordion
                                        title="3. React JS"
                                        content={formatMessage({id:"object"})}

                                    />
                                    <Accordion
                                        title="3. React JS"
                                        content={formatMessage({id:"django"})}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="backend--backFlex2">
                            <div className="backend--backFlex2__blocks2">
                                <div className="backend--backFlex2__blocks2--detail2">
                                    <h1>{formatMessage({id:"program"})}</h1>
                                    <p>{formatMessage({id:"courseFront"})}</p>
                                    <Accordion
                                        img={html}
                                        title="1. Веб - верстка"
                                        content={formatMessage({id:"pages"})}
                                    />
                                    <Accordion
                                        img={js}
                                        title="2. JavaScript"
                                        content={formatMessage({id:"learning"})}

                                    />
                                    <Accordion
                                        img={js}
                                        title="2.  JAVASCRIPT - DOM"
                                        content={formatMessage({id:"dom"})}

                                    />
                                    <Accordion
                                        img={react}
                                        title="3. React JS"
                                        content={formatMessage({id:"front-page"})}
                                    />
                                </div>
                                <div className="backend--backFlex2__blocks2--block2">
                                    <div className="backend--backFlex2__blocks2--block2__textCourse">
                                        <span>Курс</span>
                                        <h1>FRONT-END DEVELOPER</h1>
                                        <p>
                                            Курс длится 7 месяцев -
                                            6 месяц обучение
                                            1 месяц стажировка
                                        </p>
                                        <h1>10 000 cом в месяц</h1>
                                        <a href={`https://wa.me/${myNumber}?text=%20Саламатсызбы%20мен%20курстар%20%20боюунча малымат алайын дегем%20`}>Записаться</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="backend--diploma">
                            <h1>Проекты на Python</h1>
                          <p> •	Telegram Bot</p>
                           <p> •	Parsing</p>
                            <p>•	Mentoring</p>
                          <p> •	Введение в Django</p>
                          <p> •	Django Documentation</p>

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
                    <div className="backend--block">
                        <div className="backend--block__textCourse">
                            <span>Курс</span>
                            <h1>PYTHON DEVELOPER</h1>
                            <p>
                                {formatMessage({id:"block"})}
                            </p>
                            <h1>{formatMessage({id:"price"})}</h1>
                            <a href={`https://wa.me/${myNumber}?text=%20Саламатсызбы%20мен%20Backend-курсу%20%20боюунча малымат алайын дегем%20`}>{formatMessage({id:"enroll"})}</a>
                        </div>
                    </div>

                </div>


            </div>

        </section>
    );
};

export default Backend;