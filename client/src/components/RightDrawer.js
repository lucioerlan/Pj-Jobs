import React from 'react';
import { Drawer , Grid , withStyles } from '@material-ui/core';
import { availableThemes } from '../theme';

const style = () => ({
  BackdropRoot: {
    backgroundColor: 'transparent',
  },
  selectThemeBtn: {
    backgroundColor: 'rgb(250, 250, 250)',
    color: 'rgba(0, 0, 0, 0.87)',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    height: '40px',
    margin: '16px 0',
    cursor: 'pointer',
    '&.hover': {
      boxShadow: 'inset 0 0 0 20px rgba(0,0,0,.24)',
    },
  },
});

const RightDrawer = ({
  rightDrawerOpen,
  handleChangeRightDrawer,
  handleChangeTheme,
  classes,
}) => (
  <Drawer
    variant="temporary"
    anchor={'right'}
    open={rightDrawerOpen}
    onClose={handleChangeRightDrawer}
    ModalProps={{
      BackdropProps: {
        classes: { root: classes.BackdropRoot },
      },
    }}
  >
    <div style={{ width: 240, padding: 16 }}>
      <h6 style={{ paddingBottom: '10px' }}>Set theme</h6>
      {availableThemes.map(theme => (
        <div
          key={theme.title}
          onClick={() => handleChangeTheme(theme)}
          className={classes.selectThemeBtn}
        >
          <div>{theme.title}</div>
          <Grid container>
            <Grid item xs={5}>
              <div style={{ height: '10px', background: theme.primary[500] }} />
            </Grid>
            <Grid item xs={5}>
              <div
                style={{ height: '10px', background: theme.secondary[500] }}
              />
            </Grid>
          </Grid>
        </div>
      ))}
    </div>
  </Drawer>
);

export default withStyles(style)(RightDrawer);
