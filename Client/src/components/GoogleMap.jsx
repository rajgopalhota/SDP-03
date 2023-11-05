import React from 'react';

const GoogleMap = ({ src }) => {
  return (
    <div className="map-container pay-glass-card">
      <iframe
        src={src}
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Google Map"
        className="google-map-iframe"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
