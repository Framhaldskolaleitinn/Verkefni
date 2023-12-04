// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SchoolList from './SchoolList';
import SchoolPage from './SchoolPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/school-list" element={<SchoolList />} />
          <Route path='/school/:id' element={<SchoolPage />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <Link to="/school-list">
        <button>Go to School List</button>
      </Link>
    </div>
  );
};

export default App;
