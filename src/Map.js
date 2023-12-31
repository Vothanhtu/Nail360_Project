import React from 'react';
import { withGoogleMap, withScriptjs, GoogleMap} from 'react-google-maps';
import './Map.css';
function Map() {
  return (
    <div>
    <GoogleMap
          defaultZoom={20}
          defaultCenter={{ lat: 10.85927579717829, lng: 106.62061367548768 }}
        >
      </GoogleMap>
  </div>
  )
}
export default withScriptjs(withGoogleMap(Map));
