import PropTypes from 'prop-types';
import React from 'react';
import styles from '../../util/styles';


const Check = ({ color = 'dark' }) => (
  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2L7.6 15.6363L4 12.9097H2L7.6 22L22 2H20Z" fill={styles.variables[color]} />
  </svg>
);

Check.propTypes = {
  color: PropTypes.string,
};

export default Check;
