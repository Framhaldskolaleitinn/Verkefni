import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [skolaData, setSkolaData] = useState('');

  useEffect(() => {
    fetch('/api/data')
    .then(Response => Response.json())
    .then(data => setSkolaData(data.data))
  }, [])

  return (
    <div>
      <h1>{data}</h1>
    </div>
  )

}
export default App;

// dev branch