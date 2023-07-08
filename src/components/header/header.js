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

    useEffect(() => {
        window.scroll(0, 0)
    }, [])


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
                             <div>
                                 <BsGlobeCentralSouthAsia/>
                                 <a className={locale === "kg" ? "active2" : null}
                                    onClick={(e) => dispatch(setLocale(LOCALES.KYRGYZ))}>KG</a>
                                 /
                                 <a className={locale === "ru" ? "active2" : null}
                                    onClick={(e) => dispatch(setLocale(LOCALES.KYRGYZ))} >RU</a>
                             </div>
                             <div className="border"/>
                         </div>
                         <div>
                             <a className="menu__item" href="#">{formatMessage({id:"home"})}</a>
                             <a className="menu__item" href="#">{formatMessage({id:"about"})}</a>
                             <a className="menu__item" href="#">{formatMessage({id:"course"})}</a>
                             <a className="menu__item" href="#">{formatMessage({id:"rew"})}</a>
                         </div>

                         <div className="sms">
                             <span>{formatMessage({"id":"set"})}</span>
                             <div>
                                 <a className="menu__item" href="#">What’s App</a>
                                 <a className="menu__item" href="#">Instagram</a>
                                 <a className="menu__item" href="#">Позвонить</a>
                             </div>
                         </div>
                     </div>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;