import React from "react";

export default function WebsiteEmbed() {
  return (
    <div className="pay-glass-card">
      <iframe
        src="https://autobotsfrontend.netlify.app/community" // Replace with the URL of the website you want to embed
        width="100%"
        height="600"
        title="Community Website"
        className="google-map-iframe"
      ></iframe>
    </div>
  );
}
