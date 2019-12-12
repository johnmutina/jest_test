import React from 'react';
import { sum } from './sum';
import Button from './Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>{sum(1, 2)}</h1>
      <Button />
    </div>
  );
}

export default App;
