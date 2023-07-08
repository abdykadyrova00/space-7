import React, { useEffect, useState } from 'react';
// import myImage from '../../../../src/assets/img/img_right.png';
import { useIntl} from "react-intl";
import icon1 from "./../../../assets/img/icon1.png"
import icon2 from "./../../../assets/img/icon2.png"
import icon3 from "./../../../assets/img/icon3.png"
// import video from "../../../assets/video/video.mp4";


const About = () => {

    const {formatMessage} = useIntl()

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const blockRef = React.useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const blockOffsetTop = blockRef.current.offsetTop;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            if (scrollTop + windowHeight >= blockOffsetTop) {
                const interval1 = setInterval(() => {
                    setCount1((prevCount) => {
                        if (prevCount < 300) {
                            return prevCount + 1;
                        } else {
                            clearInterval(interval1);
                            return prevCount;
                        }
                    });
                }, 20);

                const interval2 = setInterval(() => {
                    setCount2((prevCount) => {
                        if (prevCount < 100) {
                            return prevCount + 1;
                        } else {
                            clearInterval(interval2);
                            return prevCount;
                        }
                    });
                }, 40);

                const interval3 = setInterval(() => {
                    setCount3((prevCount) => {
                        if (prevCount < 80) {
                            return prevCount + 1;
                        } else {
                            clearInterval(interval3);
                            return prevCount;
                        }
                    });
                }, 80);

                const interval4 = setInterval(() => {
                    setCount4((prevCount) => {
                        if (prevCount < 20) {
                            return prevCount + 1;
                        } else {
                            clearInterval(interval4);
                            return prevCount;
                        }
                    });
                }, 200);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (

        <div id="about" className="about">
            <div className="container">
                <div className="text">
                    <div className="title">
                        {/*{formatMessage({id: "au_title"})}*/}
                        “Мы не можем изменить
                            прошлое, но мы можем
                            создать будущее”
                    </div>

                    <div className="subtitle">
                        {/*{formatMessage({id: "au_subtitle"})}*/}
                        Наша цель - помочь студентам научиться
                        программированию. Наши курсы подходят для всех -
                        от начинающих до продвинутых программистов
                    </div>
                </div>

                <div className="video">
                    <div className="text">
                        <div className="card">
                            <div className="icon">
                                <img src={icon1} alt="" />
                            </div>

                            <div className="info">
                                <div className="title">
                                    {/*{formatMessage({id: "Junior_title"})}*/}
                                    C нуля до Junior
                                </div>

                                <div className="subtitle">
                                    {/*{formatMessage({id: "Junior_subtitle"})}*/}
                                    Обучись и стань Junior разработчиком!

                                </div>
                            </div>
                        </div>
                        <div className="border_left"></div>
                        <div className="card">
                            <div className="icon">
                                <img src={icon2} alt="" />
                            </div>

                            <div className="info">
                                <div className="title">
                                    {/*{formatMessage({id: "Employment_title"})}*/}
                                    Трудоустройство
                                </div>

                                <div className="subtitle">
                                    {/*{formatMessage({id: "Employment_subtitle"})}*/}
                                    Гарантировання стажировка!
                                </div>
                            </div>
                        </div>
                        <div className="border_left"></div>
                        <div className="card">
                            <div className="icon">
                                <img src={icon3} alt="" />
                            </div>

                            <div className="info">
                                <div className="title">
                                    {/*{formatMessage({id: "Portfolio_title"})}*/}
                                    Портфолио
                                </div>

                                <div className="subtitle">
                                    {/*{formatMessage({id: "Portfolio_subtitle"})}*/}
                                    5 качественных проектов к вам на портфолио
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="video_block">
                        <div className="blue">
                            <div className="card">
                                <div className="title" ref={blockRef}>
                                    +{count1}
                                </div>

                                <div className="text">
                                    {/*{formatMessage({id: "au_students"})}*/}
                                    Студентов
                                </div>
                            </div>

                            <div className="card">
                                <div className="title" ref={blockRef}>
                                    +{count2}
                                </div>

                                <div className="text">
                                    {formatMessage({id: "au_alumni"})}

                                    Студентов
                                </div>
                            </div>
                        </div>

                        {/*<video src={video} muted loop autoPlay></video>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;