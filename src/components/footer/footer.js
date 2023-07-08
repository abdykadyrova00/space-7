import React from 'react';
import logo from "./../../assets/img/itlogo.png"
import { AiFillInstagram,AiOutlineWhatsApp } from "react-icons/ai";
import {FaTelegram} from "react-icons/fa";
const Footer = () => {

    const myNumber = +996224192939
    return (
        <section id="footer">
            <div className="container">
                <div className="footer">
                    <div className="footer--card">
                    <img src={logo} alt="img"/>
                    <div className="footer--card__about">
                        <a>Главная</a>
                        <a>О нас</a>
                        <a>Курсы</a>
                        <a>Отзывы</a>
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