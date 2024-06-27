import React, { useState } from 'react';
import { FaUserMd, FaStar } from 'react-icons/fa';
import { MdLocationOn, MdPhone } from 'react-icons/md';
import './DoctorCard.css';

const DoctorCard = ({ doctor, isConsulted }) => {
  const [rating, setRating] = useState(doctor.rating || 0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className={`doctor-card ${isConsulted ? 'consulted' : 'suggested'}`}>
      <img src={doctor.image} alt={doctor.name} className={`doctor-image ${isConsulted ? 'consulted' : 'suggested'}`} />
      <div className={`doctor-details ${isConsulted ? 'consulted' : 'suggested'}`}>
        <h3>{doctor.name}</h3>
        <p>{doctor.specialization}</p>
        <p><MdLocationOn className="icon" /> {doctor.location}</p>
        <p><MdPhone className="icon" /> {doctor.contact}</p>
        {isConsulted && (
          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <FaStar 
                key={index} 
                className={`star ${index < rating ? 'selected' : ''}`} 
                onClick={() => handleRating(index + 1)} 
              />
            ))}
          </div>
        )}
      </div>
      <FaUserMd className="doctor-icon" />
    </div>
  );
};

export default DoctorCard;

