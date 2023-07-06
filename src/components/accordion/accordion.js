import img2 from "./../../assets/img/img_icon1.png";
import img1 from "./../../assets/img/img_icon2.png";

import React, {useEffect, useRef, useState} from "react";
import "./../../App.css";

const Accordion = (props) => {
    const [active, setActive] = useState(false);
    const content = useRef(null);
    const [height, setHeight] = useState("0px");
    useEffect(() => {
        console.log("Height for ", props.title, ": ", height);
    }, [height]);

    function toggleAccordion() {
        setActive(!active);
        setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
    }

    return (
        <div className="accordion__section">
            <div
                className={`accordion ${active ? "active" : ""}`}
                onClick={toggleAccordion}

            >
                <div className="line">
                    <div className="title">
                        <img src={props.img} alt=""/>
                        <p className="accordion__title">{props.title}</p>
                    </div>
                    <span>{active ? <img src={img1} alt="+"/> : <img src={img2} alt="-"/>}</span>
                </div>

                <div
                    ref={content}
                    className="accordion__content"
                >
                    <div
                        className="accordion__text"
                        dangerouslySetInnerHTML={{__html: props.content}}
                    />
                </div>
            </div>
        </div>
    );
};
export default Accordion;

