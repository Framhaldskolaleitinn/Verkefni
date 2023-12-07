// SchoolPage.js
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './header';

const SchoolPage = ({ jsonData }) => {
  const { nafn } = useParams();

  useEffect(() => {
    // Additional logic or side effects related to the school data can be added here
  }, [nafn, jsonData]);

  const school = jsonData ? jsonData.find((school) => school.nafn.toString() === nafn) : null;

  if (!school) {
    return <div>School not found</div>;
  }
  const acceptedSum =
    school.val && school.val.accepted
      ? school.val.accepted.karlar + school.val.accepted.konur + school.val.accepted.annad
      : 0;

  return (
    <>
    <div>
    <Header/>
    </div>
      <div>
        <Link to="/school-list">Go Back to School List</Link>
      <h2>{school.nafn}</h2>
      <p>Total Students: {acceptedSum}</p>
      <p>Utskriftarnemenda: {school.fjoldiUtskriftarnemenda}</p>
      <h3>Majors:</h3>
      <ul>
        {school.brautir.map((brautir, index) => (
          <li key={index}>{brautir}</li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default SchoolPage;
