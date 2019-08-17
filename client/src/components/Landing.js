import React from 'react';
import LandingContent from './LandingContent';
import Background from '../images/background-img.jpg';

const loadingContainer = {
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundPosition: '50%',
  position: 'absolute',
  left: '0',
  width: '100%',
  height: '100%'
}

const bottomLeft = {
  position: 'absolute',
  bottom: '0',
  marginLeft: '10px',
  marginBottom: '10px'
}

const Landing = () => {
  return (         
    <div style={loadingContainer}>
      <LandingContent />    
      <div style={bottomLeft}>
        FeedLoop ©2019
      </div>
    </div>
  );
};

export default Landing;