import PropTypes from 'prop-types';
import React from 'react';
import styles from '../../util/styles';


const SearchIcon = ({ color = 'dark' }) => (
  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z"
      fill={styles.variables[color]}
    />
    <path
      d="M11.412 8.58609C11.791 8.96609 12 9.46809 12 10.0001H14C14.0009 9.47451 13.8976 8.95398 13.6961 8.46857C13.4946 7.98316 13.1989 7.54251 12.826 7.17209C11.312 5.66009 8.68701 5.66009 7.17401 7.17209L8.58601 8.58809C9.34601 7.83009 10.656 7.83209 11.412 8.58609Z"
      fill={styles.variables[color]}
    />
  </svg>
);

SearchIcon.propTypes = {
  color: PropTypes.string,
};

export default SearchIcon;
