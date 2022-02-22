import React from 'react';
import PropTypes from 'prop-types';
import MapContainer from '../../common/MapContainer/MapContainer';
import Info from '../../common/Info/Info';

import styles from './Adress.module.scss';

/* MAIN LAYOUT COMPONENT */
const Adress = ({title, adressInfo}) => (
  <div className={styles.container}>
    <h1 className={styles.title}> {title} </h1>
    <div className={styles.detailsContainer}>
      <MapContainer />
      <Info adressInfo={adressInfo}/>
    </div>
  </div>
);

Adress.propTypes = {
  title: PropTypes.string,
  adressInfo: PropTypes.array,
};

export default Adress;
