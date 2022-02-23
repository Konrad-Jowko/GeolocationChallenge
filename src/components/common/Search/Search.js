import React from 'react';
import PropTypes from 'prop-types';

import styles from './Search.module.scss';

/* COMPONENT WITH FORM FOR PUTTING ADRESSES TO SEND THEM TO API */
const Search = ({getSearch}) => {
  const manageInput = () => {
    const search = document.getElementById('searchInput');
    if (search.value) {
      getSearch(search.value, false);
    }
  };

  const manageEnter = (event) => {
    if (event.key === 'Enter') {
      manageInput();
    }
  };

  return(
    <div className={styles.container}>
      <input id='searchInput' className={styles.search} type='text' placeholder='Search information on any URL or IP adress' onKeyDown={manageEnter}/>
      <div className={styles.searchButton} onClick={manageInput}> Search </div>
    </div>
  );
};

Search.propTypes = {
  content: PropTypes.string,
  getSearch: PropTypes.func,
};

export default Search;
