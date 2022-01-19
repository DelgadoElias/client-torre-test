import React from 'react';
import PropTypes from 'prop-types';

/**
 * Toast React Component.
 * @param {string} value - Prop - Contains a string to show in App.
 * @return {html} - Show the component.
 */
export default function Toast({value}) {
  return (<div>
    <div id="snackbar">{value}</div>
  </div>
  );
};

// Prop types verification
Toast.propTypes = {
  value: PropTypes.string,
};
