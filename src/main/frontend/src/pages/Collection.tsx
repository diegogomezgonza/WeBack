import React from 'react';
//CSS general
import '../css/index.css';
//CSS custom
import '../css/home.css';
//Componentes
import Header from '../components/Header';
import CollectionAlbum from '../components/CollectionAlbum';



const Collection: React.FC = () => {
  return (
    <div>
      <Header/>
      <CollectionAlbum/>
    </div>
  );
};

export default Collection;
