import React from 'react';
import {useSelector} from 'react-redux';
import Profile from '../Profile/Profile';
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

  return (
    <article className="Home__sizing">

      <article className="">
        {usersz.publicId === '' ? (
        <section className="animted fadeIn fast">
          <div className="Loading__Main">
            <h1>Search a user to start</h1>
          </div>
          <section className="Land__Title">
            <h1 className="Home__Title-text">torre</h1>
            <span className="Land__Title-sub">.co</span>
          </section>
        </section>
      ) : (
        <div>
          <Profile user={usersz} ></Profile>
        </div>
      )}
      </article>
    </article>

  );
}
