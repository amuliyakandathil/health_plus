import React from 'react';
import './App.css';
import ComponentCard from './components/ComponentCard';
import { FaFileMedical, FaPrescriptionBottle, FaVial, FaSyringe, FaNotesMedical, FaAllergies } from 'react-icons/fa';

function App() {
  const components = [
    { title: 'Medical History', icon: <FaFileMedical /> },
    { title: 'Prescriptions', icon: <FaPrescriptionBottle /> },
    { title: 'Lab Records', icon: <FaVial /> },
    { title: 'Immunization', icon: <FaSyringe /> },
    { title: 'Progress Notes', icon: <FaNotesMedical /> },
    { title: 'Allergies', icon: <FaAllergies /> }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Health Records</h1>
      </header>
      <main className="component-grid">
        {components.map((comp, index) => (
          <ComponentCard key={index} title={comp.title} icon={comp.icon} />
        ))}
      </main>
    </div>
  );
}

export default App;


