import React from "react";
import {useIntl} from "react-intl";
import {BsArrowRight} from "react-icons/bs";
import {Link, Route} from "react-router-dom";
import student from "./../../../assets/img/student1.jpg"
import student2 from "./../../../assets/img/student2.jpg"
import student3 from "./../../../assets/img/student3.jpg"
import student4 from "./../../../assets/img/student4.jpg"
import student5 from "./../../../assets/img/student5.jpg"

const Student = () => {
    const {formatMessage} = useIntl()

    return (
        <section id="student">
            <div className="container">
                <div className="title">
                    {formatMessage({"id":"project"})}
                <div className="student__card">
                    <div className="student__card_block">
                        <img src={student} alt=""/>
                        <div className="student__card_block_text">
                            <div className="student__card_block_text_card">
                                <h1>
                                    “BAITIK LUX”
                                </h1>
                                <p>
                                    Baytik Lux Residence — это закрытый комплекс, где вы можете наслаждаться комфортом и роскошью в безопасной и приватной обстановке.
                                </p>
                            </div>
                            <div className="student__card_block_text_card">
                                <a href="#">
                                    <span>
                                        СМОТРЕТЬ
                                    </span>
                                    <BsArrowRight/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="student__card_block">
                        <img src={student2} alt=""/>
                        <div className="student__card_block_text">
                            <div className="student__card_block_text_card">
                                <h1>
                                    “BAITIK LUX”
                                </h1>
                                <p>
                                    Baytik Lux Residence — это закрытый комплекс, где вы можете наслаждаться комфортом и роскошью
                                </p>

                            </div>
                            <div className="student__card_block_text_card">
                                <a href="#">
                                    <span>
                                        СМОТРЕТЬ
                                    </span>
                                    <BsArrowRight/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="student__card">
                    <div className="student__card_block block2">
                        <img src={student3} alt=""/>
                        <div className="student__card_block_text">
                            <div className="student__card_block_text_card">
                                <h1>
                                    “BAITIK LUX”
                                </h1>

                                <p>
                                    Baytik Lux Residence — это закрытый комплекс, где вы можете наслаждаться комфортом и роскошью в безопасной и приватной обстановке.
                                </p>

                            </div>
                            <div className="student__card_block_text_card">
                                <a href="#">
                                    <span>
                                        СМОТРЕТЬ
                                    </span>
                                    <BsArrowRight/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="student__card_block block2">
                        <img src={student4} alt=""/>
                        <div className="student__card_block_text">

                            <div className="student__card_block_text_card">
                                <h1>
                                    “BAITIK LUX”
                                </h1>

                                <p>
                                    Baytik Lux Residence — это закрытый комплекс, где вы можете наслаждаться комфортом и роскошью
                                </p>

                            </div>

                            <div className="student__card_block_text_card">
                                <a href="#">
                                    <span>
                                        СМОТРЕТЬ
                                    </span>
                                    <BsArrowRight/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="student__card_block block2">
                        <img src={student5} alt=""/>
                        <div className="student__card_block_text">
                            <div className="student__card_block_text_card">
                                <h1>
                                    “BAITIK LUX”
                                </h1>
                                <p>
                                    Baytik Lux Residence — это закрытый комплекс, где вы можете наслаждаться комфортом и роскошью
                                </p>
                            </div>
                            <div className="student__card_block_text_card">
                                <a href="#">
                                    <span>
                                        СМОТРЕТЬ
                                    </span>
                                    <BsArrowRight/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Student;