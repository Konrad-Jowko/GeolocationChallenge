import React from 'react';
import PropTypes from 'prop-types';

import styles from './Search.module.scss';

/* MAIN LAYOUT COMPONENT */
const Search = ({content}) => (
  <div className={styles.container}>
    <h1 className={styles.title}> search </h1>
  </div>
);

Search.propTypes = {
  content: PropTypes.string,
};

export default Search;
