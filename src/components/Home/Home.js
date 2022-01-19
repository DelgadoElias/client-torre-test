import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Constants from '../Tools/constants/constants';
import './Home.css';

/**
 * Home react Component.
 * Using constants for better code con
 * @param {useSelector} usersz - Get user of redux.
 * @param {useSelector} skills - Get user's skills of redux.
 * @param {useSelector} ExpPersonal - Get user's experience of redux(in DB).
 * @param {useSelector} ExpAPI - Get user's experience of redux(in API).
 * @param {useState} drop - Dropdown management.
 * @param {useState} dropIcon - Dropdown Icon
 * @return {HTML} - Display HTML Elements in App.
 */
export default function Home() {
  const usersz = useSelector((state) => {
    return state.person;
  });
  const skills = useSelector((state) => {
    return state.skills;
  });

  const ExpPersonal = useSelector((state) => {
    return state.experiences.personal;
  });

  const ExpAPI = useSelector((state) => {
    return state.experiences.api;
  });

  /**
   * Using constants file here ->
   */
  const [drop, setDrop] = useState(false);
  const [dropIcon, setDropIcon] = useState(Constants.homeDropIcon.plus);
  const [show, setShow] = useState('Skills__Main-container Dropdown');

  /**
 * Change Icon for the dropdown.
 * @param {useSelector} usersz - Get user of redux.
 * @param {useSelector} skills - Get user's skills of redux.
 * @param {useSelector} ExpPersonal - Get user's experience of redux(in DB).
 * @param {useSelector} ExpAPI - Get user's experience of redux(in API).
 */
  function dropSkills() {
    setDrop(!drop);
    if (drop === true) {
      setShow('Skills__Main-container Complete');
      setDropIcon(Constants.homeDropIcon.minus);
    } else {
      setShow('Skills__Main-container Dropdown');
      setDropIcon(Constants.homeDropIcon.plus);
    }
  }

  // TODO: Move to a presentacional Component
  // TODO: Create three components: User, UserXperience & Search user for start
  return (
    <article className="Home__sizing">

      <article className="Home__main-article">
        {usersz.publicId === '' ? (
        <section className="animted fadeIn fast">
          <div className="Loading__Main">
            <h1>Search a user to start</h1>
          </div>
          <section className="Land__Title">
            <h1 className="Land__Title-main">torre</h1>
            <span className="Land__Title-sub">.co</span>
          </section>
        </section>
      ) : (
        <div>
          <article className="animated fadeIn fast">
            <section className="Home__main-profile">
              <div>
                <div className="Home__thumbnail">
                  <svg
                    className="Home__thumbnail"
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
                          xlinkHref={usersz.pictureThumbnail}
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
              <h1 className="Home__Profile-name">
                {usersz.name ? usersz.name : 'Not Found' }
              </h1>
            </section>
            <section className={show}>
              <div onClick={dropSkills} className="Skills__Show-btn">
                <button className="Skills__Show-btn">Skills</button>
                <img className="Skills__Drop-Icon" src={dropIcon}></img>
              </div>

              <div className="Skills__Title">
                <img className="Skills__Svg" 
                  src={Constants.skills.master.icon}/>
                <p className="Skills__Text">{Constants.skills.master.name}</p>
              </div>
              <div className="Skill__Container">
                {
              skills.master !== undefined ?
              skills.master.map((x) => {
                return ( <span
                  key={x.name} className="Skills__Master">{x.name}</span>);
              }) :
              (<span className="Skills__Master">Error - Please Try Again</span>)
                }
              </div>
              <div className="Skills__Title">
                <img className="Skills__Svg" 
                  src={Constants.skills.expert.icon}/>
                <p className="Skills__Text">{Constants.skills.expert.name}</p>
              </div>

              <div className="Skill__Container">
                {
              skills.expert !== undefined ?
              skills.expert.map((x) => {
                return (<span
                  key={x.name} className="Skills__Expert">{x.name}
                </span>);
              }) :
              (<span className="Skills__Expert">:c</span>)
                }
              </div>
              <div className="Skills__Title">
                <img className="Skills__Svg"
                  src={Constants.skills.competitive.icon} />
                <p className="Skills__Text">
                  {Constants.skills.competitive.name}
                </p>

              </div>
              <div className="Skill__Container">
                {
              skills.proficient !== undefined ?
              skills.proficient.map((x) => {
                return (<span
                  key={x.name} className="Skills__Expert">{x.name}</span>);
              }) :
              (<span className="Skills__Expert">:P</span>)
                }
              </div>
              <div className="Skills__Title">
                <img className="Skills__Svg"
                  src={Constants.skills.novice.icon}/>
                <p className="Skills__Text">{Constants.skills.novice.name}</p>
              </div>

              <div className="Skill__Container">
                {
              skills.novice !== undefined ?
              skills.novice.map((x) => {
                return (<span
                  key={x.name} className="Skills__Expert">{x.name}</span>);
              }):
              <span className="Skills__Expert">:O</span>
                }
              </div>
            </section>
          </article>
        </div>
      )}
      </article>
      <article className="Exp__Main">
        {
              usersz.publicId === '' ?
              '' :
              (<h5>Related Experiences</h5>)
        }
        {
              ExpAPI.length === 0 ? '' :
              ExpAPI.map((x) => {
                return (
                  <section key={x.name} className="Exp__Container">
                    <hr />
                    <div className="">
                      <p className="Exp__Title">
                        {x.name !== undefined ? x.name : ''}
                      </p>
                    </div>
                    <div>
                      <span>
                        {x.organizations.length === 0 ?
                        'Not Found' : x.organizations[0].name }
                      </span>
                    </div>
                    <div>
                      {x.fromMonth ? x.fromMonth : 'Month' } {' '}
                      {x.fromYear ? x.fromYear : 'Year'} - {' '}
                      {x.toMonth ? x.toMonth : '' } {' '}
                      {x.toYear !== undefined ? x.toYear : ''}
                    </div>
                  </section>
                );
              })
        }
        {
              ExpPersonal.length === 0 ? '' :
              ExpPersonal.map((x) => {
                return (
                  <section key={x.name} className="Exp__Container">
                    <hr/>
                    <div className="">
                      <p className="Exp__Title">
                        {x.name !== undefined ? x.name : ''}
                      </p>
                    </div>
                    <div>
                      <span>
                        {x.organization ? x.organization : 'Not Found'}
                      </span>
                    </div>
                    <div>
                      {x.fMonth ? x.fMonth : 'Month' } {' '}
                      {x.fYear ? x.fYear : 'Year'} - {' '}
                      {x.tMonth ? x.tMonth : '' } {' '}
                      {x.tYear !== undefined ? x.tYear : ''}
                    </div>
                  </section>
                );
              })
        }
        <div className="Block">

        </div>

      </article>
    </article>

  );
}
