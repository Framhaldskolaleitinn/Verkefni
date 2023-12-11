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
        'The oldest existing, and continually operating educational institution in the world is the University of Karueein, founded in 859 AD in Fez, Morocco.',
      'The largest school in the world is in Lucknow, India. City Montessori School has over 56,000 students.',
      'A single pencil can draw a really long line.',
      'Iceland places a strong emphasis on outdoor education. Students often participate in activities like hiking, camping, and environmental studies as part of their curriculum.',
      'The University of Iceland, located in Reykjavik, is the countrys oldest and largest university, offering a wide range of academic programs.',
      'Unlike many other countries, there is no tradition of wearing school uniforms in Icelandic schools. Students typically wear casual clothing.',
      'United States schools dip in math rankings.',
      'Icelandic schools encourage creativity, and students often engage in various forms of artistic expression, including music, visual arts, and drama.',
      'Students in Iceland may go on unique field trips, such as visiting geysers, glaciers, and other natural wonders, providing an experiential learning opportunity.',
      'Given Icelands geological features, students may have educational programs focused on volcanoes, geysers, and other geological phenomena.',
      'The unique crayon smell comes from beef fat.',
      'Icelandic students often start learning additional languages at an early age, with English being a commonly taught language.',
      'The education system in Iceland is divided into four levels: Playschool, compulsory education, upper secondary education, and higher education.',
      'Icelandic students have a mandatory study of the Icelandic language, which includes literature and grammar, throughout their education.',
      'The school year in Iceland typically runs from late August to early June, with breaks for Christmas, Easter, and a shorter spring break.',
      'Iceland places a strong emphasis on gender equality in education, and efforts are made to ensure equal opportunities for both boys and girls.',
      'The Icelandic language has remained relatively unchanged for centuries, allowing Icelanders to read historical texts without difficulty.',
      'In Iceland, it is common for students to address their teachers by their first names, fostering a more informal and egalitarian learning environment.',
      'The curriculum in Icelandic schools includes the study of the Icelandic sagas, medieval literature that recounts historical events and legends.',
      'Education in Iceland is free at all levels, including higher education, making it accessible to all residents.',
      'The literacy rate in Iceland is exceptionally high, with a well-established tradition of reading and storytelling in the culture.',
      'Iceland is known for its inclusive education system, aiming to accommodate students with diverse learning needs in mainstream classrooms.',
      'Schools in Iceland often foster a sense of community, with parents actively participating in school events and activities.',
      'Environmental sustainability is integrated into the curriculum, reflecting Icelands commitment to eco-friendly practices.',
      'Icelandic students have opportunities to participate in international student exchange programs, promoting cultural exchange and global awareness.',
      'The Icelandic sagas and literature are integral to the curriculum, contributing to the countrys rich literary tradition.',
      'Iceland has low crime rates, contributing to a safe and secure learning environment for students.',
      'With a high level of technological infrastructure, Icelandic students often receive education in digital literacy, preparing them for the modern world.',
      'Schools in Iceland often have a midwinter break, providing students and teachers with a chance to recharge during the dark winter months.',
      'Some schools in Iceland implement sustainable practices, such as recycling programs and energy-efficient buildings.',
      'Icelandic schools often maintain small class sizes, fostering a more personalized and interactive learning environment.',
      'Iceland places a strong emphasis on gender equality in education, promoting equal opportunities for both male and female students.',
      'Schools actively contribute to the preservation of the Icelandic language, ensuring that students are proficient in their native language.',
      'Given Icelands climate, winter sports such as skiing and ice skating may be part of physical education programs.',
      'Students learn about Icelands cultural heritage, including traditional music, dance, and folklore, preserving the countrys rich history.',
      'Iceland consistently ranks high in global education rankings, reflecting the effectiveness of its education system.',
      'The school year in Iceland often follows a unique calendar, with breaks aligned with natural events like the lambing season in rural areas.',
      'Students may receive education about Icelands renewable energy sources, including geothermal and hydropower.',
      'In addition to Icelandic and English, students may have the opportunity to study other languages, fostering a multilingual environment.',
      'Schools actively encourage collaboration between parents and teachers to support students academic and personal development.',
      'Creative writing is often emphasized in Icelandic schools, nurturing the next generation of writers and storyteller'
        </ul>
      </div>
    </>
  );
};

export default App;