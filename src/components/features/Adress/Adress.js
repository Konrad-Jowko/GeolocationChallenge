import React from 'react';
import PropTypes from 'prop-types';
import MapContainer from '../../common/MapContainer/MapContainer';
import Info from '../../common/Info/Info';

import styles from './Adress.module.scss';

/* COMPONENT CONTAINING ALL USER OR SEARCHED GEOLOCATION  */
const Adress = ({title, adressInfo, geo}) => (
  <div className={styles.container}>
    <h1 className={styles.title}> {title} </h1>
    <div className={styles.detailsContainer}>
      <MapContainer geo={geo} />
      <Info adressInfo={adressInfo}/>
    </div>
  </div>
);

Adress.propTypes = {
  title: PropTypes.string,
  adressInfo: PropTypes.array,
  geo: PropTypes.object,
};

export default Adress;
