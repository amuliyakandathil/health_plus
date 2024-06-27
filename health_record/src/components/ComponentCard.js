import React from 'react';
import './ComponentCard.css';

const ComponentCard = ({ icon, title }) => {
  return (
    <div className="component-card">
      <div className="icon">
        {icon}
      </div>
      <h3>{title}</h3>
      <div className="buttons">
        <button className="view-button">View</button>
        <button className="upload-button">Upload</button>
      </div>
    </div>
  );
};

export default ComponentCard;
