import React from 'react';
//CSS general
import '../css/index.css';
//CSS custom
import '../css/home.css';
//Componentes
import Header from '../components/Header';
import ProfileHeader from '../components/ProfileHeader';
import ProfileGallery from '../components/ProfileGallery';


const Profile: React.FC = () => {
  return (
    <div>
      <Header/>
      <ProfileHeader/>
      <ProfileGallery/>
    </div>
  );
};

export default Profile;
