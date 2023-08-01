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
import {useIntl} from "react-intl";


const Front = () => {

<<<<<<< HEAD
    const { formatMessage } = useIntl();
=======
>>>>>>> a8d1cd3d683ce876a7ee6f76a00c2569e6736805
    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <section id="backend">
            <div className="detail_page">
                <div className="container">
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
                <div className="backend">
                    <div>
                        <div className="backend--backFlex">
                            <div className="backend--backFlex__blocks">
                                <div className="backend--backFlex__blocks--detail">
                                    <h1>{formatMessage({id:"program"})}</h1>
                                    <p>{formatMessage({id:"course"})}</p>
                                    <Accordion
                                        img={html}
                                        title="1. Веб - верстка"
                                        content={formatMessage({id:"page"})}
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

                        <div className="backend--diploma">
                            <h1>{formatMessage({id:"diploma"})}</h1>
                            <p>1. Landing Page </p>
                            <p>{formatMessage({id:"movie"})}</p>
                            <p>{formatMessage({id:"shop"})}</p>
                            <p>{formatMessage({id:"project"})}</p>
                        </div>

                        <div className="backend--mentors">
                            <h1>{formatMessage({id:"mentor"})}</h1>
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
                            <h1>Чему вы научитесь?</h1>
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
                                        <p>{formatMessage({id:"framework"})}</p>
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
                    <div className="backend--block">
                        <div className="backend--block__textCourse">
                            <span>Курс</span>
                            <h1>FRONT-END DEVELOPER</h1>
                            <p>
                                Курс длится 7 месяцев -
                                6 месяц обучение
                                1 месяц стажировка
                            </p>
                            <h1>10 000 cом в месяц</h1>
                            <a href={"#"}>Записаться</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Front;