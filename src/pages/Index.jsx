import React from 'react';
import crazyTimeLogo from '/images/crazytime-logo.png';

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <img src={crazyTimeLogo} className="w-full max-w-md mb-4" alt="CrazyTime Resto Bar Logo" />
      <h1 className="text-3xl font-bold mb-4">Welcome to CrazyTime RestoBar</h1>
      <p className="text-lg">Manage your bar efficiently and effectively.</p>
    </div>
  );
};

export default Index;