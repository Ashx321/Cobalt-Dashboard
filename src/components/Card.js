import React from 'react';
import profile from '../assets/profile.jpg';
import catPng from '../assets/cat.svg';
import timePng from '../assets/time.svg';

const Card = ({ imglink, courseName, courseCat, courseTime }) => {
  return (
    <div className="card">
      <img className="card-image" src={imglink} alt="placeholder" />
      <div className="text">
        <h4 className="card-title">{courseName}</h4>
        <div className="flex">
            <div>
                
          <div className="ii">
            <img className="img"src={catPng} alt="catePng" />
            <p className="card-text">Category: {courseCat}</p>
          </div>
          <div className="ii">
            <img className="img"src={timePng} alt="timePng" />
            <p className="card-text">Duration: {courseTime}</p>
          </div>

            </div>
          <div className="button">
          <button className="search-button">Register</button>
        </div>
        </div>

      </div>
    </div>
  );
};

export default Card;
