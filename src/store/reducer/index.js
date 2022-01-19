/* eslint valid-jsdoc: "error"*/
/* eslint-env es6*/

import {
  FETCH_USER,
  FETCH_USER_EXPERIENCES,
  FETCH_USER_SKILLS,
  SET_TOAST,
} from '../actions';

const initialState = {
  person: {
    publicId: '',
  },
  skills: [],
  experiences: {
    personal: [],
    api: [],
  },
  snack: '',
};

/**
 * Adds two numbers together.
 * @param {Object} state - State var. Store data about person & the app.
 * @param {Object} action - Contains type and a payload.
 * @param {Object} action.type - Type to switch actions in reducer.
 * @param {Object} action.payload - Contains data to be used in the state .
 * @returns {object} State equal or modified.
 */
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      const person = action.payload;
      return {
        ...state,
        person,
      };

    case FETCH_USER_SKILLS:
      const master = action.payload.filter((x) => x.proficiency === 'master');
      const expert = action.payload.filter((x) => x.proficiency === 'expert');
      const proficient = action.payload.filter(
          (x) => x.proficiency === 'proficient');
      const novice = action.payload.filter((x) => x.proficiency === 'novice');
      if (master.length === 0) {
        master.push({name: 'None'});
      }
      if (expert.length === 0) {
        expert.push({name: 'None'});
      }
      if (proficient.length === 0) {
        proficient.push({name: 'None'});
      }
      if (novice.length === 0) {
        proficient.push({name: 'None'});
      }

      return {
        ...state,
        skills: {
          master,
          expert,
          proficient,
          novice,
        },
      };

    case FETCH_USER_EXPERIENCES:

      return {
        ...state,
        experiences: {
          personal: action.payload[0],
          api: action.payload[1],
        },
      };

    case SET_TOAST:
      return {
        ...state,
        snack: action.payload,
      };

    default:
      return state;
  }
}
