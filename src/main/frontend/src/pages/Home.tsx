import React from 'react';
//CSS general
import '../css/index.css';
//CSS custom
import '../css/home.css';
//Componentes
import Album from '../components/Album';
import Header from '../components/Header';

const Home: React.FC = () => {
  return (
    <div>
      <Header/>
      <Album/>
    </div>
  );
};

export default Home;
