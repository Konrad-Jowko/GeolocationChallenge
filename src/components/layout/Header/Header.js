import React from 'react';
// import PropTypes from 'prop-types';


import styles from './Header.module.scss';

/* MAIN LAYOUT COMPONENT */
const Header = (props) => (
  <div className={styles.container}>
    <h2 className={styles.title}> U-R-Locator </h2>
    <h2 className={styles.subTitle}> Find places on Earth via IP and URL adresses </h2>
  </div>
);


//
// Header.propTypes = {
//   children: PropTypes.node,
//   loading: PropTypes.bool,
//   mode: PropTypes.string,
// };

export default Header;
