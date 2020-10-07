import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MaskedInput from 'react-text-mask';
import './styles.css';
import api from '../../services/api';

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(',/[1-9]/,/\d/,')',' ',/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

export default function NewUser() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  async function handleNewUser(e) {
    e.preventDefault();

    const data = {
      username,
      email,
      password,
      phone: phone.replace(/[^0-9]/g, ''),
      role,
    };

    if (!role) {
      setError('Select a function to continue!');
    } else {
      try {
        await api.post('/users', data);
        toast.success('Success in creating user!');
      } catch (err) {
        console.log(err);
        toast.error('Error in creating user!');
      }
    }
  }
  return (
    <Paper className="paper" title="Create user admin">
      <h3 className="title">Create Users</h3>

      <form onSubmit={handleNewUser}>
        <TextField
          label="Username"
          fullWidth={true}
          margin="normal"
          value={username}
          required
          onChange={e => setUsername(e.target.value)}
        />

        <TextField
          label="E-mail"
          type="email"
          fullWidth={true}
          margin="normal"
          value={email}
          required
          onChange={e => setEmail(e.target.value)}
        />

        <TextField
          aria-invalid="false"
          label="Password"
          type="password"
          fullWidth={true}
          margin="normal"
          value={password}
          required
          onChange={e => setPassowrd(e.target.value)}
        />

        <TextField
          label="Phone"
          type="text"
          fullWidth={true}
          margin="normal"
          value={phone}
          required
          onChange={e => setPhone(e.target.value)}
          InputProps={{
            inputComponent: TextMaskCustom,
            value: phone,
            onChange: e => setPhone(e.target.value),
          }}
        />

        <FormControl style={{ marginTop: 20 }} fullWidth={true}>
          <InputLabel id="demo-controlled-open-select-label">
            Function
          </InputLabel>
          <Select
            inputProps={{
              name: 'role',
              id: 'role',
            }}
            fullWidth={true}
            value={role}
            required
            onChange={e => setRole(e.target.value)}
          >
            <MenuItem value={'User'}>User</MenuItem>
            <MenuItem value={'Admin'}>Admin</MenuItem>
            <MenuItem value={'Super User'}>Super User</MenuItem>
          </Select>
        </FormControl>
        {error && (
          <div
            style={{ fontSize: 15, fontWeight: 600, color: '#af3f3f' }}
            id="error"
          >
            {error}
          </div>
        )}
          <Button
            className="buttons"
            variant="contained"
            type="submit"
            color="primary"
          >
            Save
          </Button>

      </form>
      
      <div className="clear" />
      <ToastContainer />
    </Paper>
  );
}
