import React, {useState} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {fetchUserExperiences,
  fetchUsers, fetchUserSkills, setToast} from '../../store/actions';
import Icons from '../Tools/Icons/Icons';
/**
 * Navbar react Component.
 * @param {useDispatch} dispatch - Redux - Dispatch functions to the reducer.
 * @param {useState} bool - State for dropdown management.
 * @param {useState} display - State for dropdown management(CSS).
 * @param {useState} search - Contain the action to switch in reducer.
 * @return {HTML} - Display HTML Elements in App.
 */
export default function Navbar() {
  const dispatch = useDispatch();
  const [bool, setBool] = useState(true);
  const [search, setSearch] = useState('');
  const [display, setDisplay] = useState('Nav-display');
  dispatch(setToast('User 404 - not found'));

  /**
 * Change state for search's dropdown.
 */
  function searchHandler() {
    setBool(!bool);
    if (bool) {
      setDisplay('');
    } else {
      setDisplay('Nav-display');
    }
  }

  /**
 * Submit the form and search the user.
 * @param {Event} e - Event - Used for preventDefault() form action.
 */
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(fetchUsers(search));
    dispatch(fetchUserSkills(search));
    dispatch(fetchUserExperiences(search));
    setSearch('');
  }

  /**
 * fetch Users to the reducer.
 * @param {Event} e - We identify the user with this variable.
 */
  function onInputChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }
  // *****
  return (
    <nav className="Navbar__main">
      <article className="NavBar">
        <section className="NavBar__One">
          <div className="Navbar__Toggle">
            <Link to="/add">
              <button className="Navbar__Icon-btn">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#5E8F4B"
                    d={Icons[0].d}
                  /></svg>
              </button>
            </Link>
          </div>
          <div>
            <Link className="Navbar__Redirect" to="/home">
              <span href="#home" className="NavBar__Item-home">torre</span>
              <span>.co</span>
            </Link>
          </div>
        </section>
        <section className="NavBar__Item-Two">
          <div className="Navbar__Search">
            <button onClick={searchHandler} className="Navbar__Icon-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#5E8F4B" d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"/></svg>
            </button>
          </div>
          <div className="Navbar__Redirect">
            <a className="Navbar__Redirect" href="https://accounts.torre.co/email/?next=/openid/authorize%3Fscope%3Dopenid%2Bprofile%2Bemail%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Ftorre.co%252Fcallback%253Fclient_name%253Dstarrgate%26state%3Dg-lTpXsoOBN3Y_vTRpjy3PiFszHLmPl9mxX3EQgeVTI%26intent%3Dhome%253Asign-in%26client_id%3D541493">SIGN IN</a>
          </div>
        </section>
      </article>
      <article className={`${display} Navbar__Input`}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input className="Navbar__Input-text" type="text"
            placeholder="Search by publicId ..."
            onChange={(e) => onInputChange(e)} value={search} />
          <input className="Navbar__Input-btn" type="submit" value="Search" />
        </form>
      </article>
    </nav>
  );
}
