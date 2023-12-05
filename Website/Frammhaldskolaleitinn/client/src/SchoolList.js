// SchoolList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SchoolList = ({ jsonDataProp }) => {
  const [jsonData, setJsonData] = useState(null);

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

  if (jsonData === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>List of Schools</h1>
      <Link to="/">Go Back to Home page</Link>
      <div className="school-container">
        {jsonData.map((school) => (
          <Link key={school.ID} to={`/school-list/school/${school.ID}`} className="school-box">
            <button>{school.nafn}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SchoolList;
