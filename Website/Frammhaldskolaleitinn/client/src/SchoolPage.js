// SchoolPage.js
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './header';
import './SchoolPage.css'

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
  // Lorem ipsum texti myndi breytast eftir skóla setti þetta inn til að fylla síðuna for now
  return (
    <>
    <div>
    <Header/>
    </div>
      <div className="school-page-container">
      <div className='school-info'>
      <h2>{school.nafn}</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Duis congue purus quis scelerisque vehicula. Praesent eget eros libero. Pellentesque pellentesque 
        bibendum sapien, at rhoncus nisl pharetra maximus. Integer nec mauris id urna posuere tempus. Suspendisse 
        porttitor rutrum purus non vehicula. Maecenas elementum vel eros a hendrerit. Vestibulum feugiat in neque 
        in consectetur. Nullam nec ultricies erat. Nam dolor eros, mattis eu tempus sed, lacinia a eros. Mauris lacinia 
        varius sapien quis molestie. Donec sed tincidunt quam. Nulla facilisi. Sed sit amet urna felis.</p>
      <p>Total Students: {acceptedSum}</p>
      </div>
      <div className='majors-list'>
      <h3>Brautir :</h3>
      <ul>
        {school.brautir.map((brautir, index) => (
          <li key={index}>{brautir}</li>
          ))}
      </ul>
      </div>
    </div>
    </>
  );
};

export default SchoolPage;
