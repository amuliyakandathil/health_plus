import React from 'react';
import PatientInfo from './components/PatientInfo';
import './App.css';

function App() {
  const patientData = {
    fullName: 'John Doe',
    profilePic: 'https://via.placeholder.com/150',
    dateOfBirth: '1975-05-20',
    gender: 'Male',
    maritalStatus: 'Married',
    preferredLanguage: 'English',
    occupation: 'Software Developer',
    contactInfo: {
      address: '1234 Elm Street, Springfield, IL 62704',
      phoneNumber: '(555) 123-4567',
      email: 'john.doe@example.com'
    },
    emergencyContact: {
      name: 'Jane Doe',
      relationship: 'Wife',
      phoneNumber: '(555) 987-6543'
    },
    medicalInfo: {
      bloodType: 'O+',
      allergies: 'Peanuts',
      currentMedications: 'Metformin',
      chronicConditions: ['Hypertension', 'Diabetes'],
      primaryCarePhysician: {
        name: 'Dr. Smith',
        contactInfo: '(555) 555-5555'
      }
    },
    insuranceInfo: {
      provider: 'Health Insurance Co.',
      policyNumber: '1234567890'
    },
    additionalInfo: {
      medicalHistory: 'No major illnesses',
      pastSurgeries: 'Appendectomy in 1990',
      familyMedicalHistory: 'History of heart disease',
      immunizationRecords: 'Up-to-date',
      advanceDirectives: 'None',
      preferredPharmacy: 'Local Pharmacy'
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Patient Information</h1>
      </header>
      <PatientInfo patient={patientData} />
    </div>
  );
}

export default App;
