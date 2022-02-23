import React from 'react';

import styles from './Header.module.scss';

/* COMPONENT WITH WEBSITE LOGO AND SLOGAN */
const Header = (props) => (
  <div className={styles.container}>
    <h2 className={styles.title}> U-R-Locator </h2>
    <h2 className={styles.subTitle}> Find places on Earth via IP and URL adresses </h2>
  </div>
);

export default Header;
