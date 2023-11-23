import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>React App</h1>
      <pre>{data}</pre>
    </div>
  );
};

export default App;

// dev branch