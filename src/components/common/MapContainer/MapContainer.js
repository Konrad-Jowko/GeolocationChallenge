import React, {useEffect} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { REACT_APP_GOOGLE } from '../../../API';
import PropTypes from 'prop-types';

import styles from './MapContainer.module.scss';

/* MAIN LAYOUT COMPONENT */
const MapContainer = ({content, geo}) => {
  let latitude, longitude;

  if (geo) {
    latitude = geo.latitude;
    longitude = geo.longitude;
  } else {
    latitude = 52.15193176269531;
    longitude = 21.059459686279297;
  }

  return (
    <div className={styles.container}>
      <Map
        google={window.google}
        zoom={12}
        style={{width: '100%', height: '100%'}}
        center={{ lat: latitude, lng: longitude}}
        mapTypeId= 'google.maps.MapTypeId.ROADMAP'
        streetViewControl={false}
        disableDefaultUI= {true}
      >
        {geo ? <Marker position={{ lat: geo.latitude, lng: geo.longitude}} /> : null}
      </Map>
    </div>
  );
};


MapContainer.propTypes = {
  content: PropTypes.string,
  geo: PropTypes.object,
};

export default GoogleApiWrapper({
  apiKey: REACT_APP_GOOGLE,
})(MapContainer);
