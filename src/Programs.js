import React from 'react';
import './Programs.css';
import res from './images/PROGRAM 1 result.png';
import res2 from './images/Prog 2 res.jpg';
import ImageComponent from './imagecomponent'; 

function Programs() {
  return (
    <div className="Programs">
      <h1>Our Programs</h1>
      <div className="program-container">
        <div className="program">
          <h2>Program 1</h2>
          <h4>Usage time on various apps and ads clicked</h4>
          <p>This machine learning program aims to predict whether a user 
            is likely to click on an advertisement based on their usage time on various apps 
            and previous ad clicks. The program leverages user interaction data to 
            build a predictive model that can assist advertisers in targeting users more 
            effectively while maintaining user privacy through ethical data practices.</p>
            <div className="image">
              <ImageComponent imageUrl={res} />
            </div>
        </div>
        <div className="program">
          <h2>Program 2</h2>
          <h4>Collection of local data</h4>
          <p>The goal is to create a web application that tracks user interactions with 
            advertisements locally on their device. The application will monitor which ads 
            are visited, whether the user is interested or not, and the click rates. The 
            collected data will be stored locally using the localStorage API.
          </p>
          <br></br>
          <div className="image">
              <ImageComponent imageUrl={res2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programs;
