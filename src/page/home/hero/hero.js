import React from 'react';
import {useIntl} from "react-intl";

const Hero = () => {
    const { formatMessage } = useIntl();

    return (
        <section id="hero">
            <div className="container">
                <div className="hero">
                    <h1>Ваше будущее начинается сегодня</h1>
                    <p>Курсы по программированию в Бишкеке
                        Обучаем с нуля до гарантированной стажировки за 7 месяцев!</p>

                    <button>Связаться</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;