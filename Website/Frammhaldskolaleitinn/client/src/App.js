// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import SchoolList from './SchoolList';
import SchoolPage from './SchoolPage';
import Header from './header'
import './App.css';

const App = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/data');
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/school-list" element={<SchoolList jsonData={jsonData} />} />
        <Route path="/school-list/school/:id" element={<SchoolPage jsonData={jsonData} />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  return (
    <div>
      <Header/>
      <Link to="/school-list">
        <button>Go to School List</button>
      </Link>
    </div>
  );
};

export default App;
