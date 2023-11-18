import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  fetch("/skolar")
  .then(response => response.json())
  .then(jsonData => { 
    const [data, setdata] = useState ({
      id: id
      
    })

  }
  )
  
  const [data, setdata] = useState ({
    name: '',
    age: 0,
    date: "",
    programming: "",
  })

  return (
    <>
    <div className="App">
            <header className="App-header">
                <h1>React and flask</h1>
                {/* Calling a data from setdata for showing */}
                <p>{data.name}</p>
                <p>{data.age}</p>
                <p>{data.date}</p>
                <p>{data.programming}</p>
 
            </header>
        </div>
    





        </>
  );
}

export default App;

// dev branch