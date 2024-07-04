import React from 'react';
//CSS general
import '../css/index.css';
//CSS custom
import '../css/home.css';
//Componentes
import Header from '../components/Header';
import MyAlbum from '../components/MyAlbum';


const Gallery: React.FC = () => {
  return (
    <div>
      <Header/>
      <MyAlbum/>
    </div>
  );
};

export default Gallery;
