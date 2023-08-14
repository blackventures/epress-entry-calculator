import React from 'react';
import './App.css';
import Calculator from './Calculator';

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen">
      <header className="text-center">
        <h1 className="text-xl p-4">Express Entry Calculator</h1>
        <Calculator />
      </header>
    </div>
  );
}

export default App;
