import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import History from '../../features/History/History';
import Maps from '../../features/Maps/Maps';

import styles from './MainLayout.module.scss';

/* MAIN LAYOUT COMPONENT */
const MainLayout = ({globalData}) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.contentContainer}>
        <History elements={globalData.history} />
        <Maps userAdressInfo={globalData.userAdressInfo} searchedAdressInfo={globalData.searchedAdressInfo}/>
      </div>
    </div>
  );

};

MainLayout.propTypes = {
  globalData: PropTypes.object,
};

export default MainLayout;
