import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormHelperText} from '@material-ui/core';
import { login, username, useremail, role } from '../../services/auth';
import Logo from '../../assets/img/EcorpLogo.png';
import './styles.css';
import api from '../../services/api';

export default function SignIn() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const [error, setError] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();

    if (!email || !password) {
      setError('Fill in email and password to continue!');
    } else {
      try {
        const response = await api.post('/sessionsadmin', { email, password });
        login(response.data.token);
        username(response.data.user[0].username);
        useremail(response.data.user[0].email);
        role(response.data.user[0].role);
        history.push('/home');
      } catch (err) {
        setError('There was a problem with the login, check your credentials.');
      }
    }
  }
  
  return (

    <div id="content-login">
      <form className="style-form" onSubmit={handleSignIn}>
        <img className="ecorp_logo" src={Logo} alt="Logo" />
        {error && (<FormHelperText className="error-form">{error}</FormHelperText>)}
          <input
            name='email_login'
            type="email"
            placeholder="E-mail"
            onChange={e => setEmail(e.target.value)}
          />
          <input
            name="password_login"
            type="password"
            placeholder="Password"
            onChange={e => setPassowrd(e.target.value)}
          />
        <input type="submit" value="LOG IN" />
      </form>
    </div>
  );
}