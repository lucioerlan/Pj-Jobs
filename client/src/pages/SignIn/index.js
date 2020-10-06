import React, { useState } from 'react';
import { FormField } from 'semantic-ui-react';
import './styles.css';
import EcorpLogo from '../../assets/img/EcorpLogo.png';
import { login, username, useremail, role } from '../../services/auth';
import api from '../../services/api';

function SignIn() {
  
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
        window.location.href = '/home';
      } catch (err) {
        setError('There was a problem with the login, check your credentials.');
      }
    }
  }

  return (
    <div id="tudo">
      <form className="style-form" onSubmit={handleSignIn}>
        <img
          id="ecorp_logo"
          width="100"
          height="100"
          src={EcorpLogo}
          alt="Logo"
        />
        {error && (
          <div
            style={{ fontSize: 20, fontWeight: 600, color: '#af3f3f' }}
            id="error"
          >
            {error}
          </div>
        )}
        <FormField>
          <input
            name="email_login"
            type="email"
            placeholder="E-mail"
            onChange={e => setEmail(e.target.value)}
          />
        </FormField>
        <FormField>
          <input
            name="password_login"
            type="password"
            placeholder="Password"
            onChange={e => setPassowrd(e.target.value)}
          />
        </FormField>
        <input type="submit" value="LOG IN" />
      </form>
    </div>
  );
}

export default SignIn;
