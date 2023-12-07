import React, { useState, useEffect } from 'react';

import './App.css';
import Header from "./header"

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  

  
  const [data, setdata] = useState ({
    name: '',
    age: 0,
    date: "",
    programming: "",
  })


  useEffect(() => {
    fetch('/data').then((res) =>
    res.json().then((data) => {
        // Setting a data from api
        setdata({
            name: data.Name,
            age: data.Age,
            date: data.Date,
            programming: data.programming,
        });
    })
    );
    }, []);

  const items = Array.from({ length: 30 }, (_, index) => `braut ${index + 1}`);


  return (
    <>
      <Header/>


    </>

  );
}

export default App;

// dev branch