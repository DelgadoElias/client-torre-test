import axios from 'axios';
import testFunction from '../../functions/testFunction';

export const SET_TOAST = 'SET_TOAST';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_SKILLS = 'FETCH_USER_SKILLS';
export const FETCH_USER_EXPERIENCES = 'FETCH_USER_EXPERIENCES';

/**
 * Send User to the reducer.
 * @param {num} publicId - We identify the user with this variable.
 * @param {Object} action.payload - Data to be used in the reducer.
 * @param {Object} action.action - The action to switch in reducer.
 * @return {object} - Dispatch the object to the reducer.
 */
export function fetchUsers(publicId) {
  return async function(dispatch) {
    try {
      const poder = await axios.get(`https://node-torre.herokuapp.com/user?id=${publicId}`);
      dispatch({
        type: FETCH_USER,
        payload: poder.data,
      });
    } catch (e) {
      console.log(e);
      testFunction();
    }
  };
}

/**
 * Send User skills to the reducer.
 * @param {num} publicId - We identify the user with this variable.
 * @param {Object} action.payload - Contains data to be used in the reducer.
 * @param {Object} action.action - Contain the action to switch in reducer.
 * @return {object} - Dispatch the object to the reducer.
 */
export function fetchUserSkills(publicId) {
  return async function(dispatch) {
    try {
      const poder = await axios.get(`https://node-torre.herokuapp.com/user/skills?id=${publicId}`);
      dispatch({
        type: FETCH_USER_SKILLS,
        payload: poder.data,
      });
    } catch (e) {
      testFunction();
      console.log(e);
    }
  };
}

/**
 * Send User experience to the reducer.
 * @param {num} publicId - We identify the user with this variable.
 * @param {Object} action.payload - Contains data to be used in the reducer.
 * @param {Object} action.action - Contain the action to switch in reducer.
 * @return {object} - Dispatch the object to the reducer.
 */
export function fetchUserExperiences(publicId) {
  return async function(dispatch) {
    try {
      const poder = await axios.get(`https://node-torre.herokuapp.com/user/userEx?id=${publicId}`);
      dispatch({
        type: FETCH_USER_EXPERIENCES,
        payload: poder.data,
      });
    } catch (e) {
      testFunction();
      console.log(e);
    }
  };
}

/**
 * Change the snack text in the reducer.
 * @param {String} data - Data - Toast text.
 * @param {Object} action.payload - Data to be used in the reducer(snack).
 * @param {Object} action.action - The action to switch in reducer.
 * @return {object} - Dispatch the object to the reducer.
 */
export function setToast(data) {
  return (dispatch) => {
    dispatch({type: SET_TOAST, payload: data});
  };
}
