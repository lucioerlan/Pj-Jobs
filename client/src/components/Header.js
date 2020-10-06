import React from 'react';
import classNames from 'classnames';
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  withStyles,
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import Refresh from '@material-ui/icons/Refresh';
import { logout } from '../services/auth';

const styles = theme => ({
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
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null,
    };
  }

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  handleAtualizar = () => {
    this.setState(window.location.reload());
  };

  handleLogout = () => {
    logout();
  };

  render() {
    const userEmail = localStorage.getItem('@Email');
    
    const { handleChangeNavDrawer, classes, navDrawerOpen } = this.props;

    const { anchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = event => {
      this.setState({ anchorEl: event.currentTarget });
    };

    const handleMenuClose = () => {
      this.setState({ anchorEl: null });
      this.handleMobileMenuClose();
    };

    return (
      <div>
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
            <div className={classes.sectionDesktop}>
              <Tooltip title={'Updated Page'}>
                <IconButton
                  className={classes.sectionDesktop}
                  color="inherit"
                  onClick={this.handleAtualizar}
                >
                  <Refresh />
                </IconButton>
              </Tooltip>

              <Tooltip title={'Exit'}>
                <IconButton
                  color="inherit"
                  aria-owns={isMenuOpen ? 'material-appbar' : null}
                  onClick={handleProfileMenuOpen}
                >
                  <AccountCircle />
                </IconButton>
              </Tooltip>
              <Menu id="menu_sair" keepMounted onClose={handleMenuClose}>
                <MenuItem id="username"> {userEmail} </MenuItem>
                <MenuItem onClick={this.handleLogout}>Exit </MenuItem>
              </Menu>
            </div>

            <div className={classes.sectionMobile}>
              <Tooltip title={'Updated Page'}>
                <IconButton
                  className={classes.sectionMobile}
                  color="inherit"
                  onClick={this.handleAtualizar}
                >
                  <Refresh />
                </IconButton>
              </Tooltip>

              <Tooltip title={'Sair'}>
                <IconButton
                  className={classes.sectionMobile}
                  color="inherit"
                  aria-owns={isMenuOpen ? 'material-appbar' : null}
                  onClick={handleProfileMenuOpen}
                >
                  <AccountCircle />
                </IconButton>
              </Tooltip>

              <Menu
                id="menu_sair"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem id="username"> {userEmail} </MenuItem>
                <MenuItem onClick={this.handleLogout}>Exit </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withStyles(styles)(Header);
