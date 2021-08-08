import React from 'react';
import about from '../img/about.png';

const ImageSection = () => {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Kyohei Dan</span></h4>
                <p className="about-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum necessitatibus perferendis numquam dolorem cumque facilis.
                    Desir per po la ta doso vi slone ve?
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Email</p>
                        <p>Tel</p>
                        <p>Address</p>
                        <p>Interests</p>
                    </div>
                    <div className="right-section">
                        <p>: 団 恭平</p>
                        <p>: 27</p>
                        <p>: kyohey.dan@gmail.com</p>
                        <p>: 080-3793-3277</p>
                        <p>: 大阪市淀川区木川東2−11−30</p>
                        <p>: イケてるSaaSサイトを見ること</p>
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;
