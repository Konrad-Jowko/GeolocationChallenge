import React from 'react';
import PropTypes from 'prop-types';
import History from '../../features/History/History';
import Maps from '../../features/Maps/Maps';
import Alert from '../../features/Alert/Alert';

import styles from './Homepage.module.scss';

/* HOMEPAGE COMPONENT, CONTAINING THE ENTIRE WEBSITE EXCEPT THE HEADER */
const Homepage = ({globalData, getUser, getSearch, discardAlert}) => {
  getUser();

  return (
    <div className={styles.contentContainer}>
      <History elements={globalData.history} getSearch={getSearch} />
      <Maps
        userAdressInfo={globalData.userAdressInfo}
        searchedAdressInfo={globalData.searchedAdressInfo}
        userGeo={globalData.userGeo}
        searchedGeo={globalData.searchedGeo}
        getSearch={getSearch}
      />
      {globalData.alert === true ? < Alert discardAlert={discardAlert} /> : null}
    </div>
  );
};

Homepage.propTypes = {
  globalData: PropTypes.object,
  getUser: PropTypes.func,
  getSearch: PropTypes.func,
  discardAlert: PropTypes.func,
};

export default Homepage;
