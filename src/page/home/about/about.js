import React, { useEffect, useState } from 'react';
// import myImage from '../../../../src/assets/img/img_right.png';
import { useIntl} from "react-intl";
import icon1 from "./../../../assets/img/icon1.png"
import icon2 from "./../../../assets/img/icon2.png"
import icon3 from "./../../../assets/img/icon3.png"
import video from "../../../assets/video/video.mp4";
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

        <section id="about">
            <div className="container">
                <div className="about">
                    <div className="about--text">
                        <h1>{formatMessage({id:"about"})}</h1>
                        <p>
                            {formatMessage(({id:"about-title"}))}
                        </p>

                    </div>

                    <div className="about--video">
                        <div className="about--video__text">
                            <div className="icon">
                                <div className="left">
                                        <img src={icon1} alt="" />
                                        <div className="border_left"></div>
                                        <img src={icon2} alt="" />
                                        <div className="border_left"></div>
                                        <img src={icon3} alt="" />
                                </div>

                                <div className="info">
                                    <div>
                                    <h2>
                                        {formatMessage({id:"about-text"})}
                                    </h2>

                                    <p>
                                        {formatMessage({id:"text"})}
                                    </p>
                                   </div>


                                    <div>
                                    <h2>
                                        {formatMessage({id:"Employment"})}
                                    </h2>

                                    <p>
                                        {formatMessage({id:"Employment-text"})}
                                    </p>

                                    </div>

                                    <div>
                                    <h2>
                                        {formatMessage({id:"Portfolio"})}
                                    </h2>

                                    <p>
                                        {formatMessage({id:"Portfolio-text"})}
                                    </p>
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
                                        Студентов
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="title" ref={blockRef}>
                                        +{count2}
                                    </div>

                                    <div className="text">
                                        Выпускников
                                    </div>
                                </div>
                            </div>

                            <video src={video} muted loop autoPlay></video>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;