
import React, {useEffect} from 'react';
import Accordion from "../../components/accordion/accordion";
import brat1 from './../../assets/img/brat.svg'
import icon1 from  './../../assets/img/icon1.svg'
import icon2 from  './../../assets/img/icon2.svg'
import icon3 from  './../../assets/img/icon3.svg'
import icon4 from  './../../assets/img/icon4.png'
import icon5 from  './../../assets/img/icon5.svg'
import {useIntl} from "react-intl";
import {Link} from "react-router-dom";
import str from "../../assets/img/str.svg";


const Ux = () => {

    const {formatMessage} = useIntl()




const Ux = () => {
    const {formatMessage} = useIntl()
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
}
    return (
        <section id="ux">
            <div className="detail_page">
                <div className="container">
                    <Link to={'/'}><img src={str} alt="img"/></Link>
                    <h1>UX/UI дизайнер</h1>
                    <p> {formatMessage({id:"ux-page"})}
                    </p>
                    <ul>
                        <li>{formatMessage({id:"ux-text"})}
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
                                        title={formatMessage({id:"title"})}
                                        content="Веб-дизайндын тарыхы.
                                                    Веб-дизайнер менен UX/UI дизайнердин айрмасы?
                                                    UX/UI дизайнер ким?
                                                    Figma программасы менен таанышуу.
                                                    Figma программасындагы инстурменттери менен таанышуу.
                                                    Плагиндер менен таанышуу жана орнотуу "
                                        title="1.Киришүү"
                                        content={formatMessage({id:"ux"})}
                                    />
                                    <Accordion
                                        title="2. Техникалык негиздер"
                                        content={formatMessage({id:"ux-content"})}
                                        text="Razia"
                                    />
                                    <Accordion
                                    title="3. UX/UIга аналитика"
                                    content="
                                    Сайттын максаты:
                                    Максаттуу аудиторияны аныктоо,
                                    Маркетинг триггерлери,
                                    Контентти кайдан тапса болот?
                                    User Experience"
                                        title="3. React JS"
                                        content=""
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
                                </div>
                            </div>
                        </div>

                        <div className="backend--diploma">
                            <h1>{formatMessage({id:"pro"})}</h1>
                            <p>1. Лендинг</p>
                            <p>2. Сайт</p>
                            <p>{formatMessage({id:"shop"})}</p>
                            <p>3. Трекер задач по системе «Помодоро»
                            </p>
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