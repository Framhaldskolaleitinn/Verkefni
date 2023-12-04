// SchoolPage.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const SchoolPage = ({ jsonData }) => {
    const { id } = useParams();
    console.log('Current school ID:', id);
    const school = jsonData ? jsonData.find((school) => school.ID === id) : null;
    

  useEffect(() => {
  }, [id, jsonData]);

  if (!school) {
    return <div>School not found</div>;
  }

  return (
    <div>
        <Link to="/">
        <button>Back to Homepage</button>
      </Link>
      <h2>{school.nafn}</h2>
      <p>ID: {school.ID}</p>
      <p>Total Students: {school.heildarnemendur}</p>
      <p>Utskriftarnemenda: {school.fjoldiUtskriftarnemenda}</p>
    </div>
  );
};

export default SchoolPage;