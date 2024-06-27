// src/App.js
import React from 'react';
import './App.css';
import ImagePage from './ImagePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Medication Over Time</h1>
      </header>
      <main>
        <ImagePage />
      </main>
    </div>
  );
}

export default App;
