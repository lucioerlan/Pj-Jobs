import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Tooltip } from '@material-ui/core';
import error_404 from '../../assets/img/error_404.png';
import './styles.css';

export default () => {
  return (
    <div className="container-dashboard">
      <img className="img-404" src={error_404} alt="Erro_404" />
      <h2>OOPS!</h2>
      <h3>Error 404 - Page Not Found</h3>
      <Link to="/home">
        <Tooltip title={'Come back'}>
          <Button variant="contained" color="primary" size="large">
            Voltar
          </Button>
        </Tooltip>
      </Link>
    </div>
  );
};
