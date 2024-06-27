import React from 'react';
import DoctorCard from './DoctorCard';
import './MyDoctors.css';

const MyDoctors = () => {
  const consultedDoctors = [
    { name: 'Dr. John Doe', specialization: 'Cardiologist', location: 'New York, NY', contact: '123-456-7890', image: 'https://via.placeholder.com/150', rating: 4 },
    { name: 'Dr. Jane Smith', specialization: 'Dermatologist', location: 'Los Angeles, CA', contact: '098-765-4321', image: 'https://via.placeholder.com/150', rating: 5 },
    { name: 'Dr. Alan Brown', specialization: 'Gastroenterologist', location: 'San Francisco, CA', contact: '123-987-6543', image: 'https://via.placeholder.com/150', rating: 3 },
    { name: 'Dr. Rachel Green', specialization: 'Endocrinologist', location: 'Chicago, IL', contact: '321-654-9870', image: 'https://via.placeholder.com/150', rating: 2 },
  ];

  const suggestedDoctors = [
    { name: 'Dr. Emily Davis', specialization: 'Neurologist', location: 'Austin, TX', contact: '555-123-4567', image: 'https://via.placeholder.com/150' },
    { name: 'Dr. Michael Brown', specialization: 'Pediatrician', location: 'Seattle, WA', contact: '555-765-4321', image: 'https://via.placeholder.com/150' },
    { name: 'Dr. Sarah Johnson', specialization: 'Psychiatrist', location: 'Boston, MA', contact: '555-987-6543', image: 'https://via.placeholder.com/150' },
    { name: 'Dr. Kevin White', specialization: 'Ophthalmologist', location: 'Denver, CO', contact: '555-654-3210', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="my-doctors-page">
      <h1>My Doctors</h1>
      <div className="doctors-section">
        <h2>Consulted Doctors</h2>
        <div className="doctors-list">
          {consultedDoctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} isConsulted={true} />
          ))}
        </div>
      </div>
      <div className="doctors-section">
        <h2>Suggested Doctors</h2>
        <div className="doctors-list">
          {suggestedDoctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} isConsulted={false} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyDoctors;


