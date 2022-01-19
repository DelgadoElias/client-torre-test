import React from 'react';
import {Link} from 'react-router-dom';
import Constants from '../Tools/constants/constants';
import './Landing.css';
/**
 * Show a lading page.
 * Using constants for better performance
 * @param {useState} search - Contain the action to switch in reducer.
 * @return {HTML} - Display HTML Elements in App.
 */
export default function Landing() {
  return (
    <article className="Land__Main animated fadeIn fast">
      <section className="Land__Title">
        <h1 className="Land__Title-main">{Constants.name.torre}</h1>
        <span className="Land__Title-sub">{Constants.name.co}</span>
      </section>
      <section>
        <Link to="/home">
          <button className="Land__Button">
                Search users
          </button>
        </Link>
      </section>

    </article>);
}
