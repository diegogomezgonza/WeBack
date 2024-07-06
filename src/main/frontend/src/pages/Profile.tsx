import React from 'react';
//CSS general
import '../css/index.css';
//CSS custom
import '../css/home.css';
//Componentes
import Header from '../components/Header';
import ProfileContent from '../components/ProfileContent';



const Profile: React.FC = () => {
  return (
    <div>
      <Header/>
      <ProfileContent/>
    </div>
  );
};

export default Profile;
