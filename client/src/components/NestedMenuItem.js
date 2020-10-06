import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  Menu,
  MenuItem,
  withStyles,
} from '@material-ui/core';
import ExpandMore from '@material-ui/icons/ExpandMore';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = theme => {
  return {
    chevronIcon: {
      float: 'right',
      marginLeft: 'auto',
    },
    subMenus: {
      marginLeft: 20,
      marginTop: 30,
    },
    popupSubMenus: {
      backgroundColor: 'rgb(33, 33, 33)',
      color: 'white',
      boxShadow:
        'rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px',
    },
    menuItem: {
      color: 'white',
      fontSize: 14,
      marginTop: 15,
    },
    miniMenuItem: {
      color: 'white',
      fontSize: 14,
      paddingLeft: 0,
    },
    iconHover: {
      margin: theme.spacing(),
      color: 'white',
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.5),
      },
    },
  };
};

class NestedMenuItem extends React.Component {
  state = {
    anchorEl: null,
    open: false,
  };

  anchor = null;

  handleClick = event => {
    event.stopPropagation();
    this.setState({
      open: !this.state.open,
      anchorEl: this.anchor,
    });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  renderMiniMenus() {
    const { menu, key, classes } = this.props;
    const { open, anchorEl } = this.state;

    if (!menu.subMenus || !menu.subMenus.length) {
      return (
        <Link key={key} to={menu.link}>
          <MenuItem classes={{ root: classes.miniMenuItem }}>
            <ListItemIcon className={classes.iconHover}>
              {menu.icon}
            </ListItemIcon>
          </MenuItem>
        </Link>
      );
    }

    return (
      <MenuItem
        key={key}
        classes={{ root: classes.miniMenuItem }}
        onClick={this.handleClick}
      >
        <ListItemIcon className={classes.iconHover}>{menu.icon}</ListItemIcon>
        <div
          ref={el => {
            this.anchor = el;
          }}
          style={{ position: 'absolute', right: 0 }}
        />

        <Menu
          classes={{ paper: classes.popupSubMenus }}
          open={open}
          anchorEl={anchorEl}
        >
          {menu.subMenus.map((subMenu, index) => (
            <Link key={index} to={subMenu.link}>
              <MenuItem key={index} classes={{ root: classes.menuItem }}>
                <ListItemIcon style={{ color: 'white' }}>
                  {subMenu.icon}
                </ListItemIcon>
                <span>{subMenu.text}</span>
              </MenuItem>
            </Link>
          ))}
        </Menu>
      </MenuItem>
    );
  }

  renderLargeMenus() {
    const { menu, key, classes } = this.props;
    const { open } = this.state;

    if (!menu.subMenus || !menu.subMenus.length) {
      return (
        <Link key={key} to={menu.link}>
          <MenuItem classes={{ root: classes.menuItem }}>
            <ListItemIcon style={{ color: 'white' }}>{menu.icon}</ListItemIcon>
            <span>{menu.text}</span>
          </MenuItem>
        </Link>
      );
    }

    return (
      <div>
        <ListItem
          key={key}
          classes={{ root: classes.menuItem }}
          onClick={this.handleClick}
        >
          <ListItemIcon style={{ color: 'white' }}>{menu.icon}</ListItemIcon>
          <span>{menu.text}</span>
          {open ? (
            <ExpandMore className={classes.chevronIcon} />
          ) : (
            <KeyboardArrowRight className={classes.chevronIcon} />
          )}
        </ListItem>

        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            classes={{ root: classes.subMenus }}
          >
            {menu.subMenus.map((subMenu, index) => (
              <Link key={index} to={subMenu.link}>
                <MenuItem key={index} classes={{ root: classes.menuItem }}>
                  <ListItemIcon style={{ color: 'white' }}>
                    {subMenu.icon}
                  </ListItemIcon>
                  <span>{subMenu.text}</span>
                </MenuItem>
              </Link>
            ))}
          </List>
        </Collapse>
      </div>
    );
  }

  render() {
    const { navDrawerOpen } = this.props;
    if (navDrawerOpen) {
      return this.renderLargeMenus();
    } else {
      return this.renderMiniMenus();
    }
  }
}

NestedMenuItem.propTypes = {
  key: PropTypes.string,
  menu: PropTypes.object,
  classes: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(NestedMenuItem);
