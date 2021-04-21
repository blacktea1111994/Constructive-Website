import PropTypes from 'prop-types';
import React from 'react';
import styles from './ContentWrap.scss';


const ContentWrap = ({ children, className }) => (
  <section className={`${styles.contentWrap} ${className}`}>{children}</section>
);

ContentWrap.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ContentWrap;
