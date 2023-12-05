// SchoolPage.js
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const SchoolPage = ({ jsonData }) => {
  const { id } = useParams();

  useEffect(() => {
    // Additional logic or side effects related to the school data can be added here
  }, [id, jsonData]);

  const school = jsonData ? jsonData.find((school) => school.ID.toString() === id) : null;

  if (!school) {
    return <div>School not found</div>;
  }

  return (
    <div>
        <Link to="/school-list">Go Back to School List</Link>
      <h2>{school.nafn}</h2>
      <p>ID: {school.ID}</p>
      <p>Total Students: {school.heildarnemendur}</p>
      <p>Utskriftarnemenda: {school.fjoldiUtskriftarnemenda}</p>
    </div>
  );
};

export default SchoolPage;
