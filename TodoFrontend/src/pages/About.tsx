import React from 'react';

const About: React.FC = () => {
  return (
    <div className="page about-page">
      <h1>About This System</h1>
      <p>This is a Full-Stack Todo Management System built for a 3rd-year IT student project defense.</p>
      <ul>
        <li>Frontend: React, TypeScript, Vite</li>
        <li>Backend: .NET Web API</li>
        <li>State Management: Context API</li>
        <li>Forms: react-hook-form</li>
      </ul>
    </div>
  );
};

export default About;
