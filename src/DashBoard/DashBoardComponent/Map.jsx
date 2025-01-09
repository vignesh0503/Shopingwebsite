import React from "react";
import "../DashBoard.css";

const Map = () => {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Map Content</h1>
      <p>This is where the main content of the Map will go.</p>
      <div>
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3491.467111900138!2d77.39504787437107!3d8.191517001537054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f1405923e1fb%3A0xdded763ce70bbd4d!2sALO%20Info-Tech!5e1!3m2!1sen!2sin!4v1736144286336!5m2!1sen!2sin"
          width="700"
          height="500"
          style={{ border: "0.1px solid grey" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
