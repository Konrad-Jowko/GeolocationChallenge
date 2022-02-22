import React from 'react';
import Adress from '../../features/Adress/Adress';
import Search from '../../common/Search/Search';
import PropTypes from 'prop-types';

import styles from './Maps.module.scss';

/* MAIN LAYOUT COMPONENT */
const Maps = ({userAdressInfo, searchedAdressInfo}) => (
  <div className={styles.container}>
    <Adress title='Your IP Information' adressInfo={userAdressInfo}/>
    <Search />
    <Adress title='Searched Information' adressInfo={searchedAdressInfo}/>
  </div>
);


Maps.propTypes = {
  userAdressInfo: PropTypes.array,
  searchedAdressInfo: PropTypes.array,
};

export default Maps;
