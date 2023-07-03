import React from 'react';
import logo from './../../assets/img/logo.svg'

const Header = () => {
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

                        <ul className="menu__box">
                            <li><a className="menu__item" href="#">Главная</a></li>
                            <li><a className="menu__item" href="#">Аутстаффинг</a></li>
                            <li><a className="menu__item" href="#">Блог</a></li>
                            <li><a className="menu__item" href="#">Контакты</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;