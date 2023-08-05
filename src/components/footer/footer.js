import React from 'react';
import logo from "./../../assets/img/itlogo.png"
import { AiFillInstagram,AiOutlineWhatsApp } from "react-icons/ai";
import {FaTelegram} from "react-icons/fa";
import {useIntl} from "react-intl";

const Footer = () => {
    const {formatMessage} = useIntl()

    const myNumber = +996224192939
    return (
        <section id="footer">
            <div className="container">
                <div className="footer">
                    <div className="footer--card">
                    <img src={logo} alt="img"/>
                    <div className="footer--card__about">
                        <div>
                            <a>{formatMessage({id:"house"})}</a>
                            <a>{formatMessage({id:"follow"})}</a>
                        </div>
                        <div>
                            <a>{formatMessage({id:"course"})}</a>
                            <a>{formatMessage({id:"review"})}</a>
                        </div>
                    </div>

                    <div className="footer--card__icon">
                        <a href={`https://wa.me/${myNumber}?text=%20Саламатсызбы%20мен%20курстар%20%20боюунча малымат алайын дегем%20`}><AiOutlineWhatsApp/></a>
                        <a href="https://www.instagram.com/itspace_kg/"><AiFillInstagram/></a>
                        <a href="https://web.telegram.org/k/#@nurbakytkarimov"><FaTelegram/></a>
                    </div>
                </div>
                    <div className="footer--logo">
                        <div></div>
                        <p>@All rights reserved</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;