import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Animals } from './components/Animals';

function App() {

  return (
    <div className="App">
      <Animals></Animals>
    </div>
    
  );
}

export default App;
