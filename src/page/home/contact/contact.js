import React from 'react';
import {BsFillTelephoneInboundFill, BsChatLeftFill, BsGeoAltFill, BsFillCursorFill} from "react-icons/bs";
import {AiFillInstagram, AiOutlineWhatsApp} from "react-icons/ai";
import {FaTelegram} from "react-icons/fa";
import {useIntl} from "react-intl";

const Contact = () => {
    const {formatMessage} = useIntl()
    const myNumber = +996224192939
    return (
        <section id="contact">
            <h1>{formatMessage({id:"contact"})}</h1>
            <div className="contact">
            <div className="container">
                <div className="contact--div">
                    <div className="contact--div__group">
                        <div>
                            <BsFillTelephoneInboundFill/>
                            <a href="tel:+996 220 069 456">+996 220 069 456</a>
                        </div>

                        <div>
                            <BsChatLeftFill/>
                            <a href="mailto:itspaceacademy@gmail.com">itspaceacademy@gmail.com</a>
                        </div>

                        <div>
                            <BsGeoAltFill/>
                            <a href="https://goo.gl/maps/njFSQs4ks5ftdWbR6?coh=178572&entry=tt">Ибраимова 115/4
                                (Дордой плаза)</a>
                        </div>

                        <div className="contact--div__icon">
                            <a href={`https://wa.me/${myNumber}?text=%20Саламатсызбы%20мен%20курстар%20%20боюунча малымат алайын дегем%20`}><AiOutlineWhatsApp/></a>
                            <a href="https://www.instagram.com/itspace_kg/"><AiFillInstagram/></a>
                            <a href="https://web.telegram.org/k/#@nurbakytkarimov"><FaTelegram/></a>
                        </div>

                    </div>
                    <div className="contact--div__button">
                        <a href="https://goo.gl/maps/njFSQs4ks5ftdWbR6?coh=178572&entry=tt">
                            <button> <BsFillCursorFill style={{width:"40px", color:"blue"}}/>{formatMessage({id:"maps"})}</button>
                        </a>
                    </div>

                </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;