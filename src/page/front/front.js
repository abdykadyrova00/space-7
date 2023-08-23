import React, {useEffect} from 'react';
import Accordion from "../../components/accordion/accordion";
import brat1 from './../../assets/img/brat.svg'
import in_img from './../../assets/img/in_img.svg'
import icon1 from './../../assets/img/icon1.svg'
import icon2 from './../../assets/img/icon2.svg'
import icon3 from './../../assets/img/icon3.svg'
import icon4 from './../../assets/img/icon4.png'
import icon5 from './../../assets/img/icon5.svg'
import html from './../../assets/img/html.png'
import js from './../../assets/img/js.svg'
import react from './../../assets/img/react.png'
import fon from './../../assets/img/fon.jpg'
import {Link} from "react-router-dom";
import str from "../../assets/img/str.svg";
import {useIntl} from "react-intl";


const Front = () => {

    const { formatMessage } = useIntl();

    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    const myNumber = +996224192939

    return (
        <section id="front">
            <div className="detail_page">
                <div className="container">
                    <Link to={'/'}><img src={str} alt="img"/></Link>
                    <h1>FRONT-END DEVELOPER</h1>
                    <p>{formatMessage({id:"front"})}</p>
                    <ul>
                        <li>
                            {formatMessage({id:"front-text"})}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="front">
                    <div>
                        <div className="front--backFlex">
                            <div className="front--backFlex__blocks">
                                <div className="front--backFlex__blocks--detail">
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
                            </div>
                        </div>
                        <div className="front--backFlex2">
                            <div className="front--backFlex2__blocks2">
                                <div className="front--backFlex2__blocks2--detail2">
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
                                <div className="front--backFlex2__blocks2--block2">
                                    <div className="front--backFlex2__blocks2--block2__textCourse">
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

                        <div className="front--diploma">
                            <h1>{formatMessage({id:"diploma"})}</h1>
                            <p>1. Landing Page </p>
                            <p>{formatMessage({id:"movie"})}</p>
                            <p>{formatMessage({id:"shop2"})}</p>
                            <p>{formatMessage({id:"project3"})}</p>
                        </div>

                        <div className="front--mentors">
                            <h1>{formatMessage({id:"mentor"})}</h1>
                            <div className="front--mentors__group">
                                <div className="front--mentors__group--mentorPhoto">
                                    <img src={brat1} alt=""/>
                                    <div className="front--mentors__group--mentorPhoto__fio">
                                        <h4>Баланчаев Тукунчо</h4>
                                        <h4>UX/UI Designer</h4>
                                    </div>
                                </div>
                                <div className="front--mentors__group--mentorPhoto">
                                    <img src={brat1} alt=""/>
                                    <div className="front--mentors__group--mentorPhoto__fio">
                                        <h4>Баланчаев Тукунчо</h4>
                                        <h4>UX/UI Designer</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="front--question">
                            <h1>Чему вы научитесь?</h1>
                            <div className="front--question__questionFlex">
                                <div className="front--question__questionFlex--icons">
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
                                <div className="front--question__questionFlex--textQuestion">
                                    <div>
                                        <h4>{formatMessage({id:"website"})}</h4>
                                        <p>{formatMessage({id:"website-text"})}</p>
                                    </div>
                                    <div>
                                        <h4>Java Script</h4>
                                        <p>
                                            {formatMessage({id:"js-text"})}
                                        </p>
                                    </div>
                                    <div>
                                        <h4>Framework</h4>
                                        <p>{formatMessage({id:"framework1"})}</p>
                                    </div>
                                    <div>
                                        <h4>{formatMessage({id:"git"})}</h4>
                                        <p>{formatMessage({id:"git-text"})}</p>
                                    </div>
                                    <div>
                                        <h4>{formatMessage({id:"team"})}</h4>
                                        <p>{formatMessage({id:"team-text"})}</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="front--block">
                        <div className="front--block__textCourse">
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
        </section>
    );
};

export default Front