import React from 'react';
import PropTypes from 'prop-types';

import styles from './Info.module.scss';

/* MAIN LAYOUT COMPONENT */
const Info = ({adressInfo}) => (
  <div className={styles.container}>
    <h1 className={styles.title}> Adress information </h1>
    <div className={styles.contentContainer}>
      {adressInfo ? adressInfo.map(element => (
        <div key={element.name} className={styles.element}>
          <h4 className={element.elementTitle}>{element.name}:</h4>
          <h4 className={element.elementContent}>{element.content}</h4>
        </div>
      )) : null}
    </div>
  </div>
);

Info.propTypes = {
  adressInfo: PropTypes.array,
};

export default Info;
