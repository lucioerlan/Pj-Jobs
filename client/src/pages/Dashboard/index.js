import React from 'react';
import { Route, Switch } from 'react-router-dom';
import classNames from 'classnames';
import { ButtonBase, Tooltip, withStyles } from '@material-ui/core';
import Header from '../../components/Header';
import LeftDrawer from '../../components/LeftDrawer';
import RightDrawer from '../../components/RightDrawer';
import Data from '../../data';
import Home from '../Home';
import Table from '../Table';
import Forms from '../Forms';
import NotFound from '../NotFoundPage';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import defaultTheme, { customTheme } from '../../theme';

const Style = () => ({
  container: {
    margin: '80px 20px 20px 15px',
    paddingLeft: defaultTheme.drawer.width,
    [defaultTheme.breakpoints.down('sm')]: {
      paddingLeft: 0,
    },
  },
  containerFull: {
    paddingLeft: defaultTheme.drawer.miniWidth,
    [defaultTheme.breakpoints.down('sm')]: {
      paddingLeft: 0,
    },
  },
  settingBtn: {
    top: 350,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    color: 'white',
    width: 48,
    right: 0,
    height: 48,
    opacity: 0.9,
    padding: 0,
    zIndex: 999,
    position: 'fixed',
    minWidth: 48,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
});

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: defaultTheme,
      rightDrawerOpen: false,
      navDrawerOpen:
        window &&
        window.innerWidth &&
        window.innerWidth >= defaultTheme.breakpoints.values.md
          ? true
          : false,
    };

    this.handleChangeRightDrawer = this.handleChangeRightDrawer.bind(this);
    this.handleChangeNavDrawer = this.handleChangeNavDrawer.bind(this);
    this.handleChangeTheme = this.handleChangeTheme.bind(this);
  }

  handleChangeNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen,
    });
  }

  handleChangeRightDrawer() {
    this.setState({
      rightDrawerOpen: !this.state.rightDrawerOpen,
    });
  }

  handleChangeTheme(colorOption) {
    const theme = customTheme({
      palette: colorOption,
    });
    this.setState({
      theme,
    });
  }

  render() {
    const getRoles = localStorage.getItem('@Roles');
    const { classes } = this.props;
    const { navDrawerOpen, rightDrawerOpen, theme } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <Header
          handleChangeNavDrawer={this.handleChangeNavDrawer}
          navDrawerOpen={navDrawerOpen}
        />

        <LeftDrawer
          navDrawerOpen={navDrawerOpen}
          handleChangeNavDrawer={this.handleChangeNavDrawer}
          menus={Data.menus}
        />
        <Tooltip title={'Set Theme'}>
          <ButtonBase
            color="inherit"
            classes={{ root: classes.settingBtn }}
            onClick={this.handleChangeRightDrawer}
          >
            <i className="fa fa-cog fa-3x" />
          </ButtonBase>
        </Tooltip>

        <RightDrawer
          rightDrawerOpen={rightDrawerOpen}
          handleChangeRightDrawer={this.handleChangeRightDrawer}
          handleChangeTheme={this.handleChangeTheme}
        />
        <div
          className={classNames(
            classes.container,
            !navDrawerOpen && classes.containerFull
          )}
        >
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/tableWorks" component={Table} />
            {getRoles === 'Super User' && (
              <Route path="/formAdmin" component={Forms} />
            )}
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(Style)(Dashboard);
