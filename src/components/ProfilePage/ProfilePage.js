// src/components/ProfilePage/ProfilePage.js
import React from 'react';
import { FaUser, FaStethoscope, FaFileMedical, FaFlask, FaCalendarAlt, FaComments } from 'react-icons/fa';
import './ProfilePage.css';

const ProfilePage = () => {
  const upcomingAppointments = [
    { date: '2024-06-30', doctor: 'Dr. Smith' },
    { date: '2024-07-10', doctor: 'Dr. Doe' },
  ];

  const upcomingMedications = [
    { name: 'Medicine A', time: 'Morning' },
    { name: 'Medicine B', time: 'Evening' },
  ];

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>Welcome, [User Name]</h1>
      </div>
      <div className="profile-content">
        <div className="profile-sections">
          <div className="profile-section">
            <FaUser className="profile-icon" />
            <p>Personal Information</p>
          </div>
          <div className="profile-section">
            <FaStethoscope className="profile-icon" />
            <p>My Doctors</p>
          </div>
          <div className="profile-section">
            <FaFileMedical className="profile-icon" />
            <p>Medical Reports</p>
          </div>
          <div className="profile-section">
            <FaFlask className="profile-icon" />
            <p>Laboratory Reports</p>
          </div>
          <div className="profile-section">
            <FaCalendarAlt className="profile-icon" />
            <p>Appointments</p>
          </div>
          <div className="profile-section">
            <FaComments className="profile-icon" />
            <p>Talk to Us</p>
          </div>
        </div>
        <div className="sidebar">
          <h2>Upcoming Appointments</h2>
          <ul>
            {upcomingAppointments.map((appointment, index) => (
              <li key={index}>
                <span>Date:</span> {appointment.date}, <span>Doctor:</span> {appointment.doctor}
              </li>
            ))}
          </ul>
          <h2>Upcoming Medications</h2>
          <ul>
            {upcomingMedications.map((medication, index) => (
              <li key={index}>
                <span>Medicine:</span> {medication.name}, <span>Time:</span> {medication.time}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

