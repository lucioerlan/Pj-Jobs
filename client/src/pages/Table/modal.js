import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  OutlinedInput,
  Paper,
  Select,
  TextField,
  Tooltip,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Draggable from 'react-draggable';
import api from '../../services/api';

function PaperComponent(props) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function Modal() {

  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    company_name: '',
    company_phone: '',
    company_email: '',
    company_avatar: '',
    job_description: '',
    job_image: '',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function submitHandler(e) {
    e.preventDefault();

    try {

      await api.post('/works', state);
      toast.success('Data successfully saved!');

    } catch (err) {

      console.log(err);
      toast.error('Error saving!');
    }
  }

  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <Tooltip title={'Add Job'}>
          <Button
            color="secondary"
            variant="outlined"
            id="MuiFab-primary"
            onClick={handleClickOpen}
          >
            <AddIcon />
          </Button>
        </Tooltip>

        <Dialog
          open={open}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
            Add Job
          </DialogTitle>

          <DialogContent>
            <Select
              value={state.company_avatar}
              required={true}
              name="company_avatar"
              native
              style={{ margin: 20 }}
              color="secondary"
              variant="outlined"
              input={
                <OutlinedInput
                  name="company_avatar"
                  color="primary"
                  variant="outlined"
                />
              }

              inputProps={{
                maxLength: 100,
              }}
              onChange={e =>
                setState({ ...state, company_avatar: e.target.value })
              }
            >
              <option value={0}>Company Avatar</option>
              <option
                value={
                  'https://user-images.githubusercontent.com/47280551/87725217-42058780-c793-11ea-8ae5-80ecee003c74.png'
                }
              >
                Applon
              </option>
              <option
                value={
                  'https://user-images.githubusercontent.com/47280551/87725217-42058780-c793-11ea-8ae5-80ecee003c74.png'
                }
              >
                Amalon
              </option>
              <option
                value={
                  'https://user-images.githubusercontent.com/47280551/87723781-ae32bc00-c790-11ea-82a6-fd64582fe6df.png'
                }
              >
                Googlin
              </option>
              <option
                value={
                  'https://user-images.githubusercontent.com/47280551/87723788-b12dac80-c790-11ea-8164-7731ccd2122e.png'
                }
              >
                Microsofton
              </option>
              <option
                value={
                  'https://user-images.githubusercontent.com/47280551/87723783-af63e900-c790-11ea-92cd-a99ed43af11e.png'
                }
              >
                Mercado Item
              </option>
            </Select>
            <TextField
              value={state.company_name}
              required={true}
              name="company_name"
              label="Company Name"
              style={{ margin: 20 }}
              type="text"
              color="secondary"
              margin="normal"
              variant="outlined"
              inputProps={{
                maxLength: 100,
              }}
              onChange={e =>
                setState({ ...state, company_name: e.target.value })
              }
            />

            <TextField
              value={state.company_phone}
              required={true}
              name="company_phone"
              label="Company phone"
              style={{ margin: 20 }}
              type="text"
              color="secondary"
              margin="normal"
              variant="outlined"
              inputProps={{
                maxLength: 100,
              }}
              onChange={e =>
                setState({ ...state, company_phone: e.target.value })
              }
            />

            <TextField
              value={state.company_email}
              required={true}
              name="company_email"
              label="Company Email"
              style={{ margin: 20 }}
              type="text"
              color="secondary"
              margin="normal"
              variant="outlined"
              inputProps={{
                maxLength: 50,
              }}
              onChange={e =>
                setState({ ...state, company_email: e.target.value })
              }
            />

            <TextField
              value={state.job_description}
              required={true}
              name="job_description"
              label="Job Description"
              style={{ margin: 20 }}
              type="text"
              color="secondary"
              margin="normal"
              variant="outlined"
              inputProps={{
                maxLength: 50,
              }}
              onChange={e =>
                setState({ ...state, job_description: e.target.value })
              }
            />

            <Select
              value={state.job_image}
              required={true}
              name="job_image"
              native
              style={{ margin: 20 }}
              color="secondary"
              variant="outlined"
              input={
                <OutlinedInput
                  name="job_image"
                  color="primary"
                  variant="outlined"
                />
              }
              inputProps={{
                maxLength: 50,
              }}
              onChange={e => setState({ ...state, job_image: e.target.value })}
            >
              <option value={0}>Job Image</option>
              <option
                value={
                  'https://user-images.githubusercontent.com/47280551/87727114-be4d9a00-c796-11ea-8135-24b4c68908a0.png'
                }
              >
                Desenveldor FullStack
              </option>
              <option
                value={
                  'https://user-images.githubusercontent.com/47280551/87727110-bc83d680-c796-11ea-9ef5-e30596653fc4.png'
                }
              >
                Desenveldor Frontend
              </option>
              <option
                value={
                  'https://user-images.githubusercontent.com/47280551/87727101-b7bf2280-c796-11ea-9815-c93772d03809.png'
                }
              >
                Desenvolvedor Backend
              </option>
              <option
                value={
                  'https://user-images.githubusercontent.com/47280551/87727117-bf7ec700-c796-11ea-9dc7-2c86f8bff6f5.png'
                }
              >
                Desenvolvedor Mobile
              </option>
              <option
                value={
                  'https://user-images.githubusercontent.com/47280551/87727106-baba1300-c796-11ea-9864-52e16f61395d.png'
                }
              >
                DevOps
              </option>
            </Select>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              onClick={submitHandler}
              color="secondary"
            >
              Save
            </Button>
            <Button variant="outlined" onClick={handleClose} color="secondary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </form>
      <ToastContainer />
    </React.Fragment>
  );
}

