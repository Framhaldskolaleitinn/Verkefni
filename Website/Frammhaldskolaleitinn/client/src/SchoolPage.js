// SchoolPage.js
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './header';
import './SchoolPage.css'

const SchoolPage = ({ jsonData }) => {
  const { nafn } = useParams();

  useEffect(() => {
  }, [nafn, jsonData]);

  const school = jsonData ? jsonData.find((school) => school.nafn.toString() === nafn) : null;

  if (!school) {
    return <div>School not found</div>;
  }
  const acceptedSum =
    school.val && school.val.accepted
      ? school.val.accepted.karlar + school.val.accepted.konur + school.val.accepted.annad
      : 0;
  const fyrstavalSum =
    school.val && school.val.fyrstaval
      ? school.val.fyrstaval.karlar + school.val.fyrstaval.konur + school.val.fyrstaval.annad
      : 0;
  
    // Calculate total annadval students
  const annadvalSum =
    school.val && school.val.annadval
      ? school.val.annadval.karlar + school.val.annadval.konur + school.val.annadval.annad
      : 0;


  const calculatePercentage = (count, total) => ((count / total) * 100).toFixed(2);
  const acceptedPercentageKarlar = calculatePercentage(school.val.accepted.karlar, acceptedSum);
  const acceptedPercentageKonur = calculatePercentage(school.val.accepted.konur, acceptedSum);
  const acceptedPercentageAnnad = calculatePercentage(school.val.accepted.annad, acceptedSum);
  const fyrstavalPercentageKarlar = calculatePercentage(school.val.fyrstaval.karlar, acceptedSum);
  const fyrstavalPercentageKonur = calculatePercentage(school.val.fyrstaval.konur, acceptedSum);
  const fyrstavalPercentageAnnad = calculatePercentage(school.val.fyrstaval.annad, acceptedSum);
  const annadvalPercentageKarlar = calculatePercentage(school.val.annadval.karlar, acceptedSum);
  const annadvalPercentageKonur = calculatePercentage(school.val.annadval.konur, acceptedSum);
  const annadvalPercentageAnnad = calculatePercentage(school.val.annadval.annad, acceptedSum);
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
        <h3>Umskóknir</h3>
          <h3>Accepted: {acceptedSum}</h3>
          <ul>
            <li>Karlar: {school.val.accepted.karlar} ({acceptedPercentageKarlar}%)</li>
            <li>Konur: {school.val.accepted.konur} ({acceptedPercentageKonur}%)</li>
            <li>Annad: {school.val.accepted.annad} ({acceptedPercentageAnnad}%)</li>
          </ul>
          <h3>Fyrstaval: {fyrstavalSum}</h3>
          <ul>
            <li>Karlar: {school.val.fyrstaval.karlar} ({fyrstavalPercentageKarlar}%)</li>
            <li>Konur: {school.val.fyrstaval.konur} ({fyrstavalPercentageKonur}%)</li>
            <li>Annad: {school.val.fyrstaval.annad} ({fyrstavalPercentageAnnad}%)</li>
          </ul>
          <h3>Annadval: {annadvalSum}</h3>
          <ul>
            <li>Karlar: {school.val.annadval.karlar} ({annadvalPercentageKarlar}%)</li>
            <li>Konur: {school.val.annadval.konur} ({annadvalPercentageKonur}%)</li>
            <li>Annad: {school.val.annadval.annad} ({annadvalPercentageAnnad}%)</li>
          </ul>
      </div>
      <div className='majors-list'>
      <h3>Brautir :</h3>
      <ul>
        {school.brautir.map((major, index) => (
          <li key={index}>{major.nafn} {major.studentsprof ? '(Studentsprof)' : '(Ekki Studentsprof)'}
          </li>
          ))}
      </ul>
      </div>
    </div>
    </>
  );
};

export default SchoolPage;
