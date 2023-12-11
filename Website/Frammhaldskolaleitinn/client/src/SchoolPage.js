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
  console.log('Image URL:', school.img);
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
  const fyrstavalPercentageKarlar = calculatePercentage(school.val.fyrstaval.karlar, fyrstavalSum);
  const fyrstavalPercentageKonur = calculatePercentage(school.val.fyrstaval.konur, fyrstavalSum);
  const fyrstavalPercentageAnnad = calculatePercentage(school.val.fyrstaval.annad, fyrstavalSum);
  const annadvalPercentageKarlar = calculatePercentage(school.val.annadval.karlar, annadvalSum);
  const annadvalPercentageKonur = calculatePercentage(school.val.annadval.konur, annadvalSum);
  const annadvalPercentageAnnad = calculatePercentage(school.val.annadval.annad, annadvalSum);
  const majorsWithStudentsProf = school.brautir.filter((major) => major.studentsprof);
  const majorsWithoutStudentsProf = school.brautir.filter((major) => !major.studentsprof);
  // Lorem ipsum texti myndi breytast eftir skóla setti þetta inn til að fylla síðuna for now
  return (
    <>
    <div>
    <Header/>
    </div>
      <div className="school-page-container">
      <div className='school-info'>
      <h2>{school.nafn}</h2>
      <img src={school.img} alt={`Logo of ${school.nafn}`} className='skola-logo' />
      <p> {school.texti}</p>
        <h3>Umskóknir</h3>
          <h3>Hleypt inn: {acceptedSum}</h3>
          <ul>
            <li>Karlar: {school.val.accepted.karlar} ({acceptedPercentageKarlar}%)</li>
            <li>Konur: {school.val.accepted.konur} ({acceptedPercentageKonur}%)</li>
            <li>Annad: {school.val.accepted.annad} ({acceptedPercentageAnnad}%)</li>
          </ul>
          <h3>Fyrsta val: {fyrstavalSum}</h3>
          <ul>
            <li>Karlar: {school.val.fyrstaval.karlar} ({fyrstavalPercentageKarlar}%)</li>
            <li>Konur: {school.val.fyrstaval.konur} ({fyrstavalPercentageKonur}%)</li>
            <li>Annad: {school.val.fyrstaval.annad} ({fyrstavalPercentageAnnad}%)</li>
          </ul>
          <h3>Annað val: {annadvalSum}</h3>
          <ul>
            <li>Karlar: {school.val.annadval.karlar} ({annadvalPercentageKarlar}%)</li>
            <li>Konur: {school.val.annadval.konur} ({annadvalPercentageKonur}%)</li>
            <li>Annad: {school.val.annadval.annad} ({annadvalPercentageAnnad}%)</li>
          </ul>
      </div>
      <div className='majors-list'>
      <h3>Brautir með Stúdentsprófi</h3>
          <ul>
            {majorsWithStudentsProf.map((major, index) => (
              <li key={index}>{major.nafn} - {major.UtskriftartimiAnnir / 2} ár</li>
            ))}
          </ul>
          <h3>Brautir án Stúdentsprófs</h3>
          <ul>
            {majorsWithoutStudentsProf.map((major, index) => (
              <li key={index}>{major.nafn} - {major.UtskriftartimiAnnir / 2} ár</li>
            ))}
          </ul>
      <iframe
            title={`Google Maps - ${school.nafn}`}
            src={school.location}
            width="400"
            height="300"
            allowFullScreen
            loading="lazy"
            ></iframe>
      </div>
    </div>
    </>
  );
};

export default SchoolPage;