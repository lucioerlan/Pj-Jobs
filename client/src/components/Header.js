import React, { useState } from 'react';
import classNames from 'classnames';
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  makeStyles,
  Toolbar,
  Tooltip,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { AccountCircle, Refresh } from '@material-ui/icons';
import { logout } from '../services/auth';

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${theme.drawer.width}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  grow: {
    flexGrow: 1,
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 40,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

export default function Header(props) {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const userEmail = localStorage.getItem('@Email');

  const handleMenu = event => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);
  const handleLogout = () => logout();

  const { handleChangeNavDrawer, navDrawerOpen } = props;

  return (
    
    <AppBar
      className={classNames(classes.appBar, {
        [classes.appBarShift]: navDrawerOpen,
      })}
    >
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Open drawer"
          onClick={handleChangeNavDrawer}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.grow} />

        <Tooltip title={'Atualizar Página'}>
          <IconButton color="inherit" onClick={e => window.location.reload()}>
            <Refresh />
          </IconButton>
        </Tooltip>

        <Tooltip title={'Sair'}>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Tooltip>

        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem id="username"> {userEmail} </MenuItem>
          <MenuItem onClick={handleLogout}>Sair</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
