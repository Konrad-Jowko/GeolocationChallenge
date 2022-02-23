import React from 'react';
import Header from '../Header/Header';
import Homepage from '../../views/Homepage/HomepageContainer';

import styles from './MainLayout.module.scss';

/* MAIN LAYOUT COMPONENT */
const MainLayout = () => (
  <div className={styles.container}>
    <Header />
    <Homepage />
  </div>
);


export default MainLayout;
