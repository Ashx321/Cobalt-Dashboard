import React from 'react';
import Profile from '../assets/ellipse.svg';

const Headder = () => {
  return (
    <div className='Header'>
        <h1>Cobalt</h1>
        <img className="profile-icon" src={Profile} alt="profile pic"/>
    </div>
  )
}

export default Headder