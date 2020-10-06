import React from 'react';
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
  withStyles,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Draggable from 'react-draggable';
import InputMask from 'react-input-mask';
import api from '../../services/api';

function PaperComponent(props) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

const styles = {
  uploadButton: { padding: 0 },
  uploadLabel: {
    marginBottom: 0,
    padding: '0.7em 30px',
    cursor: 'pointer',
  },
  file: {
    display: 'none',
  },
};

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      company_name: '',
      company_phone: '',
      company_email: '',
      company_avatar: '',
      job_description: '',
      job_image: '',
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    api
      .post('/works', this.state)

      .then(response => {
        this.handleClose();
        toast.success('Data successfully saved!');
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })

      .catch(error => {
        toast.error('Error saving!');
        console.log(error);
      });
  };

  render() {
    const {
      company_name,
      company_phone,
      company_email,
      company_avatar,
      job_description,
      job_image,
    } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.submitHandler}>
          <Tooltip title={'Add Job'}>
            <Button
              color="secondary"
              variant="outlined"
              id="MuiFab-primary"
              onClick={this.handleClickOpen}
            >
              <AddIcon />
            </Button>
          </Tooltip>

          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
          >
            <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
              Add Job
            </DialogTitle>

            <DialogContent>
              <Select
                id="company_avatar"
                required={true}
                name="company_avatar"
                native
                value={company_avatar}
                style={{ margin: 20 }}
                color="primary"
                margin="normal"
                variant="outlined"
                input={
                  <OutlinedInput
                    name="company_avatar"
                    color="primary"
                    variant="outlined"
                  />
                }
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  maxLength: 100,
                }}
                onChange={this.changeHandler}
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
                id="company_name"
                required={true}
                name="company_name"
                label="Company Name"
                value={company_name}
                style={{ margin: 20 }}
                type="text"
                color="secondary"
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  maxLength: 100,
                }}
                onChange={this.changeHandler}
              />

              <InputMask
                id="outlined-name"
                mask="99-99999-9999"
                value={company_phone}
                onChange={this.changeHandler}
              >
                {() => (
                  <TextField
                    id="company_phone"
                    required={true}
                    name="company_phone"
                    label="Company phone"
                    value={company_phone}
                    style={{ margin: 20 }}
                    type="text"
                    color="secondary"
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      maxLength: 100,
                    }}
                    onChange={this.changeHandler}
                  />
                )}
              </InputMask>

              <TextField
                id="company_email"
                required={true}
                name="company_email"
                label="Company Email"
                value={company_email}
                style={{ margin: 20 }}
                type="text"
                color="secondary"
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  maxLength: 50,
                }}
                onChange={this.changeHandler}
              />

              <TextField
                id="job_description"
                required={true}
                name="job_description"
                label="Job Description"
                value={job_description}
                style={{ margin: 20 }}
                type="text"
                color="secondary"
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  maxLength: 50,
                }}
                onChange={this.changeHandler}
              />

              <Select
                id="job_image"
                required={true}
                name="job_image"
                native
                value={job_image}
                style={{ margin: 20 }}
                color="primary"
                margin="normal"
                variant="outlined"
                input={
                  <OutlinedInput
                    name="job_image"
                    color="primary"
                    variant="outlined"
                  />
                }
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  maxLength: 50,
                }}
                onChange={this.changeHandler}
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
                onClick={this.submitHandler}
                color="secondary"
              >
                Save
              </Button>
              <Button
                variant="outlined"
                onClick={this.handleClose}
                color="secondary"
              >
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </form>
        <ToastContainer />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Modal);
