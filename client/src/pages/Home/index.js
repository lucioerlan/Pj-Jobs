import React from 'react';
import welcome from '../../assets/img/welcome.png';
import './styles.css';

export default () => {
  
  const Username = localStorage.getItem('@Username');
  return (
    <div className="container-dashboard">
      <img className="welcome-Logo" src={welcome} alt="bem vindo" />
      <h1>Hi, {Username}🎉</h1>
    </div>
  );
};