import React from "react";
import GoogleMapReact from "google-map-react";
import { useStaticQuery, graphql } from "gatsby"
import Marker from "./Marker";

const GoogleMap = ({ center, zoom }) => {
  const data = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        apiUrl
      }
    }
  }
`)
const key = data.site.siteMetadata.apiUrl

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: key }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker
          lat={center.lat}
          lng={center.lng}
          name="Simon's Law Firm"
          color="red"
        />
      </GoogleMapReact>
    </div>
  );
};

GoogleMap.defaultProps = {
  center: {
    lat: 35.6593,
    lng: -105.94031,
  },
  zoom: 11,
};

export default GoogleMap;
