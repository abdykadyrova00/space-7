
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



const Ux = () => {
    const {formatMessage} = useIntl()
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <section id="backend">
            <div className="detail_page">
                <div className="container">
                    <h1>UX/UI дизайнер</h1>
                    <p>UX/UI дизайны боюнча ар тараптуу
                        билимге ээ болуп, 100 доллардан 1 миллион долларга чейин киреше таба баштаңыз, чоң долбоорлордо чоң компанияда иштеп өз клечегиңизге кадам таштаңыз.
                    </p>
                    <ul>
                        <li>Курсту мыкты денгээлде аяктаган студенттерге сертификат+жумушка
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
                                    <h1>Программа</h1>
                                    <p>Основные курсы</p>
                                    <Accordion
                                        title="1.Киришүү"
                                        content={formatMessage({id:"ux"})}
                                    />
                                    <Accordion
                                        title="2. Техникалык негиздер"
                                        content={formatMessage({id:"ux-content"})}
                                        text="Razia"
                                    />
                                    <Accordion
                                        title="3. React JS"
                                        content=""
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="backend--diploma">
                            <h1>Дипломные проекты</h1>
                            <p>1. Landing Page </p>
                            <p>2. Сайт</p>
                            <p>3. Интернет магазин</p>
                            <p>4. С чем мы будем и как будем работать</p>
                        </div>

                        <div className="backend--mentors">
                            <h1>Наши менторы</h1>
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
                                        <h4>Верстать сайт</h4>
                                        <p>Детально изучите все возможности современного CSS, научитесь верстать
                                            адаптивныесайты, которыми удобно пользоваться. Сделаете проекты
                                            эстетичнее при помощианимаций и переходов.</p>
                                    </div>
                                    <div>
                                        <h4>Java Script</h4>
                                        <p>Будете проектировать логику работы сайта. От простого модального окнадо
                                            асинхронной загрузки данных с сервера и программирования enterprise-
                                            приложений.Без стресса выучите один из
                                            самых популярных языков программирования.</p>
                                    </div>
                                    <div>
                                        <h4>Framework</h4>
                                        <p>С помощью фреймворков вы сможете быстрее разрабатывать сложные
                                            веб-сервисы, а ещё они эффективнее расходуют ресурсы браузера.
                                            Вы сами выбираете, что учить — React или Vue..</p>
                                    </div>
                                    <div>
                                        <h4>Работать с GIT</h4>
                                        <p>Будете сохранять все этапы работы над проектами, чтобы у коллег всегда был
                                            доступ к коду, а случайные ошибки можно было исправить в два клика</p>
                                    </div>
                                    <div>
                                        <h4>Красота в команде</h4>
                                        <p>Научитесь работать по спринтам и Scrum-методологии. Под руководством
                                            тимлидавместе  с другими студентами напишете веб-приложение.</p>
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

export default Ux;