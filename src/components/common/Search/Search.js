import React from 'react';
import PropTypes from 'prop-types';

import styles from './Search.module.scss';

/* MAIN LAYOUT COMPONENT */
const Search = ({content}) => (
  <div className={styles.container}>
    <input className={styles.search} type='text' placeholder='Search information on any URL or IP adress'/>
    <div className={styles.searchButton}> Search </div>
  </div>
);

Search.propTypes = {
  content: PropTypes.string,
};

export default Search;
