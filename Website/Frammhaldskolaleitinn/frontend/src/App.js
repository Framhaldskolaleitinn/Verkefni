import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const[data,setData] = useState([{}])

  useEffect(() => {
    fetch('/skolar').then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return <div>

  </div>
}

export default App

// dev branch