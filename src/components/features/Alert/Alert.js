import React from 'react';
import PropTypes from 'prop-types';

import styles from './Alert.module.scss';

/* COMPONENT FOR ALERTING IN CASE OF WRONG SEARCH INPUT */
const Alert = ({discardAlert}) => (
  <div className={styles.container} onClick={discardAlert}>
    <div className={styles.box}>
      <h1 className={styles.title}>WRONG INPUT</h1>
      <h3 className={styles.subtitle}> Please, type only URL or IP adress</h3>
      <div className={styles.okButton}> OK </div>
    </div>
  </div>
);

Alert.propTypes = {
  discardAlert: PropTypes.func,
};

export default Alert;
