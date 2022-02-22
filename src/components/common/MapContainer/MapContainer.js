import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { REACT_APP_GOOGLE } from '../../../API';
import PropTypes from 'prop-types';

import styles from './MapContainer.module.scss';

/* MAIN LAYOUT COMPONENT */
const MapContainer = ({content}) => (
  <div className={styles.container}>
    <Map
      google={window.google}
      zoom={8}
      style={{width: '100%', height: '100%'}}
      initialCenter={{ lat: 47.444, lng: -122.176}}
      mapTypeId= 'google.maps.MapTypeId.ROADMAP'
      streetViewControl= 'false'
      disableDefaultUI= 'true'
    />
  </div>
);

MapContainer.propTypes = {
  content: PropTypes.string,
};

export default GoogleApiWrapper({
  apiKey: REACT_APP_GOOGLE,
})(MapContainer);
