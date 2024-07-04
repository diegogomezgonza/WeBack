import React from 'react';
//CSS general
import '../css/index.css';
//CSS custom
import '../css/home.css';
//Componentes
import Header from '../components/Header';
import Album from '../components/Album';


const Contact: React.FC = () => {
  return (
    <div>
      <Header/>
      <Album/>
    </div>
  );
};

export default Contact;
