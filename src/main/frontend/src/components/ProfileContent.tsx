import React from 'react';

const ProfileContent: React.FC = () => {
  return (
    <div className="flex justify-center items-start mt-16 sm:mt-24">
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
        <h1 className="text-2xl font-bold text-gray-700">diego</h1>
      </div>
    </div>
  );
};

export default ProfileContent;
