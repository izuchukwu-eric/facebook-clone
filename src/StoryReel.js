import React from 'react';
import './StoryReel.css';
import Story from './Story';
import Izu from './img/izu_img.jpg';
import Emmy from './img/emmy_img.jpg';
import Nzube from './img/zubby.jpg';
import Esther from './img/esther.jpg';
import Dubem from './img/dubem.jpg';
import Facebook from './img/facebook-clone.png';
import Netflix from './img/clone-img.png';
import Coinsglobals from './img/Coinsglobals.png';
import Umbrella from './img/umbrella.png';
import Money from './img/money_heist.png';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story image={Facebook} profileSrc={Izu} title="just4_eric" />
            <Story image={Netflix} profileSrc={Emmy} title="emmy boy" />
            <Story image={Money} profileSrc={Nzube} title="Nzube" />
            <Story image={Coinsglobals} profileSrc={Dubem} title="Dubem" />
            <Story image={Umbrella} profileSrc={Esther} title="Blue Rose" />
        </div>
    )
}

export default StoryReel
