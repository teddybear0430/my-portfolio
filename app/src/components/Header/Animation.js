import React from 'react';
import ParticlesBg from 'particles-bg';
import '../../styles/header.scss';

const Animation = () => {
    return (
        <div id="Animation">
            <ParticlesBg color="#bb99ff" type="circle" bg={true}></ParticlesBg>
            <div className="title-container">
                <h1 className="title">My Portfolio</h1>
                <span className="sub-title">Web Developer</span>
            </div>
        </div>
    );
}

export default Animation;
