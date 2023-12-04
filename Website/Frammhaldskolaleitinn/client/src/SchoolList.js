import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SchoolList = () => {
  const [jsonData, setJsonData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3001/api/data');
          const data = await response.json();
          console.log('Fetched data:', data); // Add this line
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
      <div className="school-container">
        {jsonData.map((school) => (
          <Link key={school.ID} to={`/school/${school.ID}`} className="school-box">
            <button>{school.nafn}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SchoolList;
