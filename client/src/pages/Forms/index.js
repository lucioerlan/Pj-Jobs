import React, { useState } from 'react';
import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';
import api from '../../services/api';

export default function NewUser() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');

  async function handleNewUser(e) {
    e.preventDefault();

    const data = {
      username,
      email,
      password,
      phone,
      role,
    };

    try {
      await api.post('/users', data);
      toast.success('Success in creating user!');
    } catch (err) {
      console.log(err);
      toast.error('Error in creating user!');
    }
  }
  return (
    <div className="new-incident-container">
      <Paper
        className="paper"
        title="Create user admin"
        navigation="Application / Form Page"
      >
        <h3 className="title">Create Users</h3>

        <form onSubmit={handleNewUser}>
          <TextField
            hintText="Name"
            label="Username"
            fullWidth={true}
            margin="normal"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />

          <TextField
            hintText="Name"
            label="E-mail"
            type="email"
            fullWidth={true}
            margin="normal"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <TextField
            hintText="Name"
            label="Password"
            type="password"
            fullWidth={true}
            margin="normal"
            value={password}
            onChange={e => setPassowrd(e.target.value)}
          />

          <TextField
            hintText="Name"
            label="Phone"
            type="text"
            fullWidth={true}
            margin="normal"
            value={phone}
            onChange={e => setPhone(e.target.value)}
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
              margin="normal"
              value={role}
              onChange={e => setRole(e.target.value)}
            >
              <MenuItem value={'User'}>User</MenuItem>
              <MenuItem value={'Admin'}>Admin</MenuItem>
              <MenuItem value={'Super User'}>Super User</MenuItem>
            </Select>
          </FormControl>

          <div className="buttons">
            <Button
              className="saveButton"
              variant="contained"
              type="submit"
              color="primary"
            >
              Save
            </Button>
          </div>
        </form>
        <Divider />

        <div className="clear" />
      </Paper>
      <ToastContainer />
    </div>
  );
}
