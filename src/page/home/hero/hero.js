import React from 'react';
import {useIntl} from "react-intl";

const Hero = () => {
    const { formatMessage } = useIntl();

    return (
        <section id="hero">
            <div className="container">
                <div className="hero">
                    <h1>{formatMessage({"id":"hero"})}</h1>
                    <p>{formatMessage({"id":"hero_des"})}</p>

                    <button>{formatMessage({"id":"btn_hero"})}</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;