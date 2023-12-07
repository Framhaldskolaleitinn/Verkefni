// SchoolPage.js
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const SchoolPage = ({ jsonData }) => {
  const { nafn } = useParams();

  useEffect(() => {
    // Additional logic or side effects related to the school data can be added here
  }, [nafn, jsonData]);

  const school = jsonData ? jsonData.find((school) => school.nafn.toString() === nafn) : null;

  if (!school) {
    return <div>School not found</div>;
  }

  return (
    <div>
        <Link to="/school-list">Go Back to School List</Link>
      <h2>{school.nafn}</h2>
      <p>Total Students: {school.heildarnemendur}</p>
      <p>Utskriftarnemenda: {school.fjoldiUtskriftarnemenda}</p>
      <h3>Majors:</h3>
      <ul>
        {school.majors.map((major, index) => (
          <li key={index}>{major}</li>
        ))}
      </ul>
    </div>
  );
};

export default SchoolPage;
