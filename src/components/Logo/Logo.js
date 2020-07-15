import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import square from './square.png'

const Logo = () => {
  return (
  <div className='ma4 mt0'>
    <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 70, width: 70 }} >
    <div className="Tilt-inner pa1"><img alt='logo' src={square}/></div>
    </Tilt>
  </div>
  );
}

export default Logo;