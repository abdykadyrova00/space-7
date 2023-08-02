
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
<<<<<<< HEAD
import front from "../front/front";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
=======
<<<<<<< HEAD
import {Link} from "react-router-dom";
import str from "../../assets/img/str.svg";
import {useIntl} from "react-intl";


const Ux = () => {

    const {formatMessage} = useIntl()

=======
>>>>>>> d8a47dace03a6f446d17d51f27375701b11a8051



const Ux = () => {
    const {formatMessage} = useIntl()
>>>>>>> 6bd1847d5597bef6ff2499b16cf884f7719c0619
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
<<<<<<< HEAD
        <section id="backend">
            <div className="task">
=======
        <section id="ux">
            <div className="detail_page">
>>>>>>> d8a47dace03a6f446d17d51f27375701b11a8051
                <div className="container">
                    <Link to={'/'}><img src={str} alt="img"/></Link>
                    <h1>UX/UI дизайнер</h1>
<<<<<<< HEAD
                    <p>
                        {formatMessage({id:"designer"})}
                    </p>
                    <ul>
                        <li>
                            {formatMessage({id:"course"})}
=======
                    <p> {formatMessage({id:"ux-page"})}
                    </p>
                    <ul>
                        <li>{formatMessage({id:"ux-text"})}
>>>>>>> d8a47dace03a6f446d17d51f27375701b11a8051
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
<<<<<<< HEAD
                                        title={formatMessage({id:"introduction"})}
=======
<<<<<<< HEAD
                                        title={formatMessage({id:"title"})}
                                        content="Веб-дизайндын тарыхы.
                                                    Веб-дизайнер менен UX/UI дизайнердин айрмасы?
                                                    UX/UI дизайнер ким?
                                                    Figma программасы менен таанышуу.
                                                    Figma программасындагы инстурменттери менен таанышуу.
                                                    Плагиндер менен таанышуу жана орнотуу "
=======
                                        title="1.Киришүү"
>>>>>>> d8a47dace03a6f446d17d51f27375701b11a8051
                                        content={formatMessage({id:"ux"})}
>>>>>>> 6bd1847d5597bef6ff2499b16cf884f7719c0619
                                    />
                                    <Accordion
                                        title={formatMessage({id:"ux-ui"})}
                                        content={formatMessage({id:"ux-content"})}
                                        text="Razia"
                                    />
                                    <Accordion
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
                                    title="3. UX/UIга аналитика"
                                    content="
                                    Сайттын максаты:
                                    Максаттуу аудиторияны аныктоо,
                                    Маркетинг триггерлери,
                                    Контентти кайдан тапса болот?
                                    User Experience"
=======
                                        title="3. React JS"
                                        content=""
>>>>>>> 6bd1847d5597bef6ff2499b16cf884f7719c0619
                                    />
                                    <Accordion
                                        title="4. Техникалык тапшырма менен иштөө"
                                        content="
                                        Кардар менен иштөө,
                                            Келишимди туура багытта кою,
                                            Ортодогу койгойлорду чечүү"
                                    />
                                    <Accordion
                                    title="5. Визитка сайт"
                                    content="
                                         UI-кит,
                                            Биринчи экран эрежеси,
                                            Иконкалар менен иштөө тартиби,
                                            Биринчи экранды тартуу үчүн текшерүү тизмеси,
                                    "
                                    />
                                    <Accordion
                                    title="6. Landing page"
                                    content="
                                        Идея издөө шилтемелерди тандоо жана алгачкы кадамдар,
                                        Биринчи эскиздер менен иштөө,
                                        Дизайндагы деталдар,
                                        Дизайнды анимацияга салуу.
                                    "
                                    />
                                    <Accordion
                                    title="7. User flow, wereframe"
                                    content="Behanске жүктөө,
                                                Кошумча элементтердин үстүндө иштөө,
                                                Сайттын мобильдик түрү"
                                    />
                                    <Accordion
                                    title="8. Интернет-магазин"
                                    content="
                                        Товардык топ:
                                        Биринчи экран, Биз жөнүндө, Колонтитул, Рахмат терезеси.
                                        Тавардын карточкасы,
                                        Дизайнды оформления кылып Behanceке жүктөө.
                                    "/>
>>>>>>> d8a47dace03a6f446d17d51f27375701b11a8051
                                </div>
                            </div>
                        </div>

                        <div className="backend--diploma">
<<<<<<< HEAD
                            <h1>{formatMessage({id:"project"})}</h1>
                            <p>1. Landing Page </p>
=======
                            <h1>{formatMessage({id:"pro"})}</h1>
                            <p>1. Лендинг</p>
>>>>>>> d8a47dace03a6f446d17d51f27375701b11a8051
                            <p>2. Сайт</p>
                            <p>{formatMessage({id:"shop"})}</p>
                            <p>3. Трекер задач по системе «Помодоро»
                            </p>
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

<<<<<<< HEAD
=======



>>>>>>> 6bd1847d5597bef6ff2499b16cf884f7719c0619
    );
};

export default Ux;