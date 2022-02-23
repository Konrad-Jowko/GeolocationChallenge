import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import PropTypes from 'prop-types';

import styles from './MapContainer.module.scss';

/* COMPONENT RENDERING MAPS WITH GEOLOCATION INFO ACQUIRED FROM API */
const MapContainer = ({geo}) => {
  if (geo !== undefined) {
    return (
      <div className={styles.container}>
        <Map
          google={window.google}
          zoom={11}
          style={{width: '100%', height: '100%'}}
          initialCenter={{ lat: geo.latitude, lng: geo.longitude}}
          center={{ lat: geo.latitude, lng: geo.longitude}}
          mapTypeId= 'google.maps.MapTypeId.ROADMAP'
          streetViewControl={false}
          disableDefaultUI= {true}
        >
          {geo ? <Marker position={{ lat: geo.latitude, lng: geo.longitude}} /> : null}
        </Map>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.placeholder}> Please search for URL or IP adress to display it&apos;s location </div>
      </div>
    );
  }
};

MapContainer.propTypes = {
  content: PropTypes.string,
  geo: PropTypes.object,
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE,
})(MapContainer);
