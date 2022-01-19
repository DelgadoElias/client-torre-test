import React from 'react';
import {useSelector} from 'react-redux';
import Profile from '../Profile/Profile';
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

  const ExpPersonal = useSelector((state) => {
    return state.experiences.personal;
  });

  const ExpAPI = useSelector((state) => {
    return state.experiences.api;
  });

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
          <Profile user={usersz} ></Profile>
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
