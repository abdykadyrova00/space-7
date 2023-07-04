import React, {useEffect, useState} from 'react';
import logo from './../../assets/img/logo.svg'
import Menu from "./menu";
import {useDispatch, useSelector} from "react-redux";
import {useIntl} from "react-intl";
import {setLocale} from "../../redux/reducer/main";
import {LOCALES} from "../../react-intl/locales";
import {BsGlobeCentralSouthAsia} from "react-icons/bs";



const Header = () => {

    const locale = useSelector((state) => state.main.locale);

    const dispatch = useDispatch();
    const { formatMessage } = useIntl();

    const [bg, setBg] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setBg(true);
        } else {
            setBg(false);
        }
    };

    useEffect(() => {
        changeBackground();
        window.addEventListener("scroll", changeBackground);
    });

    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    <div>
                        <img src={logo} alt="img" />
                    </div>
                    <div className="hamburger-menu">
                        <input id="menu__toggle" type="checkbox"/>
                        <label className="menu__btn" htmlFor="menu__toggle">
                            <span></span>
                        </label>
                     <div className="menu__box">
                         <div className="lang">
                             <BsGlobeCentralSouthAsia/>
                             <a href="#" onClick={(e) => dispatch(setLocale(LOCALES.KYRGYZ))} >KG</a>

                             <a href="#" onClick={(e) => dispatch(setLocale(LOCALES.RUSSIAN))} >RU</a>
                         </div>
                         <ul>
                             <li><a className="menu__item" href="#">Главная</a></li>
                             <li><a className="menu__item" href="#">О нас</a></li>
                             <li><a className="menu__item" href="#">Курсы</a></li>
                             <li><a className="menu__item" href="#">Отзывы</a></li>
                         </ul>
                     </div>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;