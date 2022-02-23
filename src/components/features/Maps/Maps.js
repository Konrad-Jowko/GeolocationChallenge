import React from 'react';
import Adress from '../../features/Adress/Adress';
import Search from '../../common/Search/Search';
import PropTypes from 'prop-types';

import styles from './Maps.module.scss';

/* COMPONENT FOR ACQUIRING AND DISPLAYING GEOLOCATION DATA */
const Maps = ({userAdressInfo, searchedAdressInfo, userGeo, searchedGeo, getSearch}) => (
  <div className={styles.container}>
    <Adress title='Your IP Information' adressInfo={userAdressInfo} geo={userGeo}/>
    <Search getSearch={getSearch} />
    <Adress title='Searched Information' adressInfo={searchedAdressInfo} geo={searchedGeo}/>
  </div>
);

Maps.propTypes = {
  userAdressInfo: PropTypes.array,
  searchedAdressInfo: PropTypes.array,
  userGeo: PropTypes.object,
  searchedGeo: PropTypes.object,
  getSearch: PropTypes.func,
};

export default Maps;
