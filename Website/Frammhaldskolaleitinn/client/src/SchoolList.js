// SchoolList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import './SchoolList.css'

const SchoolList = ({ jsonDataProp }) => {
  const [jsonData, setJsonData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/data');
        const clonedResponse = response.clone();
        const dataText = await clonedResponse.text();
        console.log('Raw data:', dataText);
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Filter schools based on searchQuery
  const filteredSchools = jsonData
    ? jsonData.filter((school) =>
        school.brautir.some((major) => major[0].toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  if (jsonData === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div>
    <Header/>
    </div>
    <div className='school-list-container'>
      <h1>List of Schools</h1>
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search by major..."
        value={searchQuery}
        onChange={handleSearch}
      />

      <div className="school-container">
        {filteredSchools.map((school) => (
          <Link key={school.nafn} to={`/school-list/school/${school.nafn}`} className="school-box">
            <button>{school.nafn}</button>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
};

export default SchoolList;