import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles, MenuItem } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  subMenus: {
    marginLeft: 20,
    marginTop: 30,
  },
  menuContent: {
    color: 'white',
    justifyContent: 'space-between',
    textAlign: 'center',
    margin: '20px 80px 20px 20px',
  },
  menuItem: {
    color: 'white',
    fontSize: 14,
    marginTop: 15,
  },
}));

export default function NestedMenuItem(props) {
  const classes = useStyles();
  const { menu, key } = props;

  if (!menu.subMenus || !menu.subMenus.length) {
    return (
      <Link key={key} to={menu.link}>
        <MenuItem className={classes.menuContent}>
          <span>{menu.icon}</span>
          <span>{menu.text}</span>
        </MenuItem>
      </Link>
    );
  }
}

NestedMenuItem.propTypes = {
  key: PropTypes.string,
  menu: PropTypes.object,
  classes: PropTypes.object,
};
