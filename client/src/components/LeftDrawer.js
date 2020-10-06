import React from 'react';
import classNames from 'classnames';
import { Drawer, Hidden, withStyles } from '@material-ui/core';
import NestedMenuItem from './NestedMenuItem';

const drawStyles = theme => {
  return {
    drawerPaper: {
      width: theme.drawer.width,
      backgroundColor: "rgb(33, 33, 33)",
      color: "white",
      borderRight: "0px",
      boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px"
    },
    drawerPaperClose: {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.drawer.miniWidth
    },
    logo: {
      cursor: "pointer",
      fontSize: 22,
      color: "white",
      lineHeight: "64px",
      fontWeight: 300,
      backgroundColor: theme.palette.primary[500],
      paddingLeft: 40,
      height: 64
    },

    menuItem: {
      color: "white",
      fontSize: 14
    }
  };
};


const LeftDrawer = props => {
  let { navDrawerOpen, classes, theme, handleChangeNavDrawer } = props;

  const drawerContent = () => (
    <div>
      <div className={classes.logo}>Admin PJ Jobs</div>
      <div></div>
      {props.menus.map((menu, index) => (
        <NestedMenuItem key={index} menu={menu} navDrawerOpen={navDrawerOpen} />
      ))}
    </div>
  );

  return (
    <div>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={navDrawerOpen}
          onClose={handleChangeNavDrawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawerContent(handleChangeNavDrawer)}
        </Drawer>
      </Hidden>

      <Hidden smDown>
        <Drawer
          open={navDrawerOpen}
          variant="permanent"
          classes={{
            paper: classNames(
              classes.drawerPaper,
              !navDrawerOpen && classes.drawerPaperClose
            ),
          }}
        >
          {drawerContent()}
        </Drawer>
      </Hidden>
    </div>
  );
};

export default withStyles(drawStyles, { withTheme: true })(LeftDrawer);
