// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import SchoolList from './SchoolList';
import SchoolPage from './SchoolPage';
import Header from './header'
import './App.css';

const App = () => {
  
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/data');
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/school-list" element={<SchoolList jsonData={jsonData} />} />
        <Route path="/school-list/school/:nafn" element={<SchoolPage jsonData={jsonData} />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  return (
    <>
      <div>
        <Header />
        <h2>Random School Facts:</h2>
        <ul>
      <p>'The oldest existing, and continually operating educational institution in the world is the University of Karueein, founded in 859 AD in Fez, Morocco.',</p>
      <p>'The largest school in the world is in Lucknow, India. City Montessori School has over 56,000 students.',</p>
      <p>'A single pencil can draw a really long line.',</p>
      <p>'Iceland places a strong emphasis on outdoor education. Students often participate in activities like hiking, camping, and environmental studies as part of their curriculum.',</p>
      <p>'The University of Iceland, located in Reykjavik, is the countrys oldest and largest university, offering a wide range of academic programs.',</p>
      <p>'Unlike many other countries, there is no tradition of wearing school uniforms in Icelandic schools. Students typically wear casual clothing.',</p>
      <p>'United States schools dip in math rankings.',</p>
      <p>'Icelandic schools encourage creativity, and students often engage in various forms of artistic expression, including music, visual arts, and drama.',</p>
      <p>'Students in Iceland may go on unique field trips, such as visiting geysers, glaciers, and other natural wonders, providing an experiential learning opportunity.',</p>
      <p>'Given Icelands geological features, students may have educational programs focused on volcanoes, geysers, and other geological phenomena.',</p>
      <p>'The unique crayon smell comes from beef fat.',</p>
      <p>'Icelandic students often start learning additional languages at an early age, with English being a commonly taught language.',</p>
      <p>'The education system in Iceland is divided into four levels: Playschool, compulsory education, upper secondary education, and higher education.',</p>
      <p>'Icelandic students have a mandatory study of the Icelandic language, which includes literature and grammar, throughout their education.',</p>
      <p>'The school year in Iceland typically runs from late August to early June, with breaks yo momma gay :for Christmas, Easter, and a shorter spring break.',</p>
      <p>'Iceland places a strong emphasis on gender equality in education, and efforts are made to ensure equal opportunities for both boys and girls.',</p>
      <p>'The Icelandic language has remained relatively unchanged for centuries, allowing Icelanders to read historical texts without difficulty.',</p>
      <p>'In Iceland, it is common for students to address their teachers by their first names, fostering a more informal and egalitarian learning environment.',</p>
      <p>'The curriculum in Icelandic schools includes the study of the Icelandic sagas, medieval literature that recounts historical events and legends.',</p>
      <p>'Education in Iceland is free at all levels, including higher education, making it accessible to all residents.',</p>
      <p>'The literacy rate in Iceland is exceptionally high, with a well-established tradition of reading and storytelling in the culture.',</p>
      <p>'Iceland is known for its inclusive education system, aiming to accommodate students with diverse learning needs in mainstream classrooms.',</p>
      <p>'Schools in Iceland often foster a sense of community, with parents actively participating in school events and activities.',</p>
      
        </ul>
      </div>
    </>
  );
};

export default App;