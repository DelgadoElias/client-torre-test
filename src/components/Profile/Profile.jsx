import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Constants from '../Tools/constants/constants';
import {useSelector} from 'react-redux';
import './../Home/Home.css';
import Experiences from './Experiences/Experiences';

/**
 * Toast React Component.
 * @param {string} value - Prop - Contains a string to show in App.
 * @param {useState} drop - Dropdown management.
 * @param {useState} dropIcon - Dropdown Icon
 * @return {html} - Show the component.
*/
export default function Profile({user}) {
  const [drop, setDrop] = useState(false);
  const [dropIcon, setDropIcon] = useState(Constants.homeDropIcon.plus);
  const [show, setShow] = useState('Skills__Main-container Dropdown');
  const skills = useSelector((state) => {
    return state.skills;
  });

  /**
 * Change Icon for the dropdown.
 */
  function dropSkills() {
    if (window.screen.width < 1024) {
      setDrop(!drop);
      if (drop === true) {
        setShow('Skills__Main-container Complete');
        setDropIcon(Constants.homeDropIcon.minus);
      } else {
        setShow('Skills__Main-container Dropdown');
        setDropIcon(Constants.homeDropIcon.plus);
      }
    }
  }

  return (<>
    <article className="animated fadeIn fast Profile__main-article">
      <section className="">
        <div>
          <div className="Profile__thumbnail-icon">
            <svg
              className="Profile__thumbnail-icon"
              viewBox="0 0 100 100"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="img"
                  patternUnits="userSpaceOnUse"
                  width="100"
                  height="100"
                >
                  <image
                    xlinkHref={user.pictureThumbnail}
                    x="-25"
                    width="150"
                    height="100"
                  />
                </pattern>
              </defs>
              <polygon
                points="50 1 95 25 95 75 50 99 5 75 5 25"
                fill="url(#img)"
              />
            </svg>
          </div>
        </div>
        <h1 className="Profile__User-name">
          {user.name ? user.name : 'Not Found' }
        </h1>
      </section>
      <section className={show}>
        <div onClick={dropSkills} className="Skills__btn-show">
          <button className="Skills__btn-show">Skills</button>
          { window.screen.width < 1024 ?
            <img className="Skills__Drop-Icon" src={dropIcon}></img> :
            <span></span>
          }
        </div>
        <div className="Skills__Main-desktop-container">
          <div className="Skills__Section-container">
            <div className="Skills__Title">
              <img className="Skills__Title-img"
                src={Constants.skills.master.icon}/>
              <p className="Skills__Title-text">
                {Constants.skills.master.name}
              </p>
            </div>
            <div className="Skill__Div-container">
              {
                  skills.master !== undefined ?
                  skills.master.map((x) => {
                    return ( <span
                      key={x.name} className="Skills_Span-text">
                      {x.name}
                    </span>);
                  }) :
                  (<span className="Skills_Span-text">
                      Error - Please Try Again
                  </span>)
              }
            </div>
          </div>
          <div className="Skills__Section-container">
            <div className="Skills__Title">
              <img className="Skills__Title-img"
                src={Constants.skills.expert.icon}/>
              <p className="Skills__Title-text">
                {Constants.skills.expert.name}
              </p>
            </div>
            <div className="Skill__Div-container">
              {
                  skills.expert !== undefined ?
                  skills.expert.map((x) => {
                    return (<span
                      key={x.name} className="Skills_Span-text">{x.name}
                    </span>);
                  }) :
                  (<span className="Skills_Span-text">:c</span>)
              }
            </div>
          </div>
          <div className="Skills__Section-container">
            <div className="Skills__Title">
              <img className="Skills__Title-img"
                src={Constants.skills.competitive.icon} />
              <p className="Skills__Title-text">
                {Constants.skills.competitive.name}
              </p>
            </div>
            <div className="Skill__Div-container">
              {
                  skills.proficient !== undefined ?
                  skills.proficient.map((x) => {
                    return (<span
                      key={x.name} className="Skills_Span-text">
                      {x.name}
                    </span>);
                  }) :
                  (<span className="Skills_Span-text">:P</span>)
              }
            </div>
          </div>
          <div className="Skills__Section-container">
            <div className="Skills__Title">
              <img className="Skills__Title-img"
                src={Constants.skills.novice.icon}/>
              <p className="Skills__Title-text">
                {Constants.skills.novice.name}</p>
            </div>
            <div className="Skill__Div-container">
              {
                  skills.novice !== undefined ?
                  skills.novice.map((x) => {
                    return (<span
                      key={x.name} className="Skills_Span-text">
                      {x.name}
                    </span>);
                  }):
                  <span className="Skills_Span-text">:O</span>
              }
            </div>
          </div>
        </div>

      </section>
    </article>
    <Experiences></Experiences>
  </>
  );
};

// Prop types verification
Profile.propTypes = {
  user: PropTypes.object,
  skills: PropTypes.object,
};
