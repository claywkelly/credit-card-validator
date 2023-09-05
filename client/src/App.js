import React, { useState } from 'react';
import "./App.css";
import { ValidationBox } from './components/validationBox';
import { ValidationResult } from './components/validationResult';

function App() {
  const [results, setResult] = useState(false);
  return (
    <div className="App">
      <div className="validation-container">
        <ValidationBox setResult={setResult}/>
        <ValidationResult result={results}/>
      </div>
    </div>
  )
}

export default App