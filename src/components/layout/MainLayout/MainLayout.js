import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import History from '../../features/History/History';
import Maps from '../../features/Maps/Maps';
import Alert from '../../features/Alert/Alert';

import styles from './MainLayout.module.scss';

/* MAIN LAYOUT COMPONENT */
const MainLayout = ({globalData, getUser, getSearch, discardAlert}) => {
  useEffect(() => {
    getUser();
  });

  console.log(globalData);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.contentContainer}>
        <History elements={globalData.history} getSearch={getSearch} />
        <Maps
          userAdressInfo={globalData.userAdressInfo}
          searchedAdressInfo={globalData.searchedAdressInfo}
          userGeo={globalData.userGeo}
          searchedGeo={globalData.searchedGeo}
          getSearch={getSearch}
        />
      </div>
      {globalData.alert === true ? < Alert discardAlert={discardAlert} /> : null}
    </div>
  );

};

MainLayout.propTypes = {
  globalData: PropTypes.object,
  getUser: PropTypes.func,
  getSearch: PropTypes.func,
  discardAlert: PropTypes.func,
};

export default MainLayout;
