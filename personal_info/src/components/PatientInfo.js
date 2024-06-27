import React from 'react';
import './PatientInfo.css';
import { FaUser, FaBirthdayCake, FaVenusMars, FaHeart, FaPhone, FaEnvelope, FaHome, FaStethoscope, FaFileMedical, FaMedkit, FaAmbulance, FaPills } from 'react-icons/fa';

const PatientInfo = ({ patient }) => {
  return (
    <div className="patient-info">
      <div className="section profile">
        <img src={patient.profilePic} alt="Profile" className="profile-pic" />
        <h2><FaUser /> {patient.fullName}</h2>
      </div>

      <div className="section personal-details">
        <h3>Personal Details</h3>
        <p><FaBirthdayCake /> <strong>Date of Birth:</strong> {patient.dateOfBirth}</p>
        <p><FaVenusMars /> <strong>Gender:</strong> {patient.gender}</p>
        <p><FaHeart /> <strong>Marital Status:</strong> {patient.maritalStatus}</p>
        <p><strong>Preferred Language:</strong> {patient.preferredLanguage}</p>
        <p><strong>Occupation:</strong> {patient.occupation}</p>
      </div>

      <div className="section contact-info">
        <h3>Contact Information</h3>
        <p><FaHome /> <strong>Address:</strong> {patient.contactInfo.address}</p>
        <p><FaPhone /> <strong>Phone Number:</strong> {patient.contactInfo.phoneNumber}</p>
        <p><FaEnvelope /> <strong>Email Address:</strong> {patient.contactInfo.email}</p>
      </div>

      <div className="section emergency-contact">
        <h3>Emergency Contact Information</h3>
        <p><FaUser /> <strong>Name:</strong> {patient.emergencyContact.name}</p>
        <p><strong>Relationship:</strong> {patient.emergencyContact.relationship}</p>
        <p><FaPhone /> <strong>Phone Number:</strong> {patient.emergencyContact.phoneNumber}</p>
      </div>

      <div className="section medical-info">
        <h3>Medical Information</h3>
        <p><FaFileMedical /> <strong>Blood Type:</strong> {patient.medicalInfo.bloodType}</p>
        <p><FaMedkit /> <strong>Allergies:</strong> {patient.medicalInfo.allergies}</p>
        <p><FaPills /> <strong>Current Medications:</strong> {patient.medicalInfo.currentMedications}</p>
        <p><FaHeart /> <strong>Chronic Conditions:</strong> {patient.medicalInfo.chronicConditions.join(', ')}</p>
        <p><FaStethoscope /> <strong>Primary Care Physician:</strong> {patient.medicalInfo.primaryCarePhysician.name}</p>
        <p><FaPhone /> <strong>Primary Care Physician Contact:</strong> {patient.medicalInfo.primaryCarePhysician.contactInfo}</p>
      </div>

      <div className="section insurance-info">
        <h3>Insurance Information</h3>
        <p><FaFileMedical /> <strong>Provider:</strong> {patient.insuranceInfo.provider}</p>
        <p><FaFileMedical /> <strong>Policy Number:</strong> {patient.insuranceInfo.policyNumber}</p>
      </div>

      <div className="section additional-info">
        <h3>Additional Information</h3>
        <p><FaFileMedical /> <strong>Medical History:</strong> {patient.additionalInfo.medicalHistory}</p>
        <p><FaFileMedical /> <strong>Past Surgeries:</strong> {patient.additionalInfo.pastSurgeries}</p>
        <p><FaFileMedical /> <strong>Family Medical History:</strong> {patient.additionalInfo.familyMedicalHistory}</p>
        <p><FaFileMedical /> <strong>Immunization Records:</strong> {patient.additionalInfo.immunizationRecords}</p>
        <p><FaFileMedical /> <strong>Advance Directives:</strong> {patient.additionalInfo.advanceDirectives}</p>
        <p><FaAmbulance /> <strong>Preferred Pharmacy:</strong> {patient.additionalInfo.preferredPharmacy}</p>
      </div>
    </div>
  );
};

export default PatientInfo;
