import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons'

const InfoBox = ({text,link,btnText}) =>(
    <div className="info-box">
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)
const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>Hi, I am <span className='font-semibold'>Mandar</span>👋<br />A Software Developer from India
        </h1> 
    ),
    2: (
        <InfoBox text="My journey has been a blend of learning, building, and growing through hands-on experience." link="/about" btnText="About me"/>
    ),
    3: (
        <InfoBox text="Brought ideas to life through impactful projects. Curious to see the work?" link="/projects" btnText="My Projects"/>
    ),
    4: (
        <InfoBox text="Need a project done or looking for a dev? I'm just a few keystrokes away" link="/contact" btnText="Contact"/>
    ),
}



const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo