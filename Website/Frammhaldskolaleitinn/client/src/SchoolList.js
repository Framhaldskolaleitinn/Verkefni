// SchoolList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import './SchoolList.css'

const SchoolList = ({ jsonDataProp }) => {
  const [jsonData, setJsonData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [includeStudentsProf, setIncludeStudentsProf] = useState(false);

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

  console.log('jsonData:', jsonData);
  const filteredSchools = jsonData
  ? jsonData.filter((school) =>
      school.brautir.some(
        (major) =>
          major.nafn.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (!includeStudentsProf || (includeStudentsProf && major.studentsprof === true))
      )
    )
  : [];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleCheckboxChange = () => {
    setIncludeStudentsProf(!includeStudentsProf);
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
      <h1>Listi af Skólum</h1>
      {/* Search bar */}
      <input
        type="text"
        placeholder="Leita eftir braut..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <label>
          <input
            type="checkbox"
            checked={includeStudentsProf}
            onChange={handleCheckboxChange}
          />
          Brautir með Stúdentsprófi
        </label>

      <div className="school-container">
        {filteredSchools.map((school) => (
          <Link key={school.nafn} to={`/school-list/school/${school.nafn}`} className="school-box"> 
            <button>
             {school.nafn}</button>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
};

export default SchoolList;