import React, {useEffect, useState} from 'react';
import logo from './../../assets/img/logo.svg'
import Menu from "./menu";
import {useDispatch, useSelector} from "react-redux";
import {useIntl} from "react-intl";
import {setLocale} from "../../redux/reducer/main";
import {LOCALES} from "../../react-intl/locales";
import {BsGlobeCentralSouthAsia} from "react-icons/bs";
import {Link} from "react-router-dom";



const Header = () => {

    const myNumber = +996224192939

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
                       <Link to={"/"}><img src={logo} alt="img" /></Link>
                    </div>
                    <div className="hamburger-menu">
                        <input id="menu__toggle" type="checkbox"/>
                        <label className="menu__btn" htmlFor="menu__toggle">
                            <span></span>
                        </label>
                     <div className="menu__box">
                         <div className="lang">
                             <div className="lang-div">
                                 <BsGlobeCentralSouthAsia/>
                                 <div>
                                     <a className={locale === "kg" ? "active2" : null}
                                        onClick={(e) => dispatch(setLocale(LOCALES.KYRGYZ))}>KG</a>
                                     /
                                     <a className={locale === "ru" ? "active2" : null}
                                        onClick={(e) => dispatch(setLocale(LOCALES.RUSSIAN))} >RU</a>
                                 </div>
                             </div>
                             <div className="border"/>
                         </div>
                         <div>
                             <a className="menu__item" href="#">{formatMessage({id:"home"})}</a>
                             <a className="menu__item" href="#">{formatMessage({id:"aboutH"})}</a>
                             <a className="menu__item" href="#">{formatMessage({id:"courseH"})}</a>
                             <a className="menu__item" href="#">{formatMessage({id:"rew"})}</a>
                         </div>
                         <div className="sms">
                             <span>{formatMessage({"id":"set"})}</span>
                             <div>
                                 <a className="menu__item" href={`https://wa.me/${myNumber}?text=%20Саламатсызбы%20мен%20курстар%20%20боюунча малымат алайын дегем%20`}>What’s App</a>
                                 <a className="menu__item" href="https://www.instagram.com/itspace_kg/">Instagram</a>
                                 <a className="menu__item" href="https://web.telegram.org/k/#@nurbakytkarimov">Позвонить</a>
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