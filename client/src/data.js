import React from 'react';
import HomeOutlined from '@material-ui/icons/HomeOutlined';
import WorkOutline from '@material-ui/icons/WorkOutline';
import BuildOutlined from '@material-ui/icons/BuildOutlined';

const getRoles = localStorage.getItem('@Roles');

const data = {
  menus: [
    { text: 'Home', icon: <HomeOutlined />, link: '/home' },
    { text: 'Works', icon: <WorkOutline />, link: '/tableWorks' },
    { text: 'Config', icon: <BuildOutlined />, link: '/formAdmin' },
  ],
};

if (getRoles !== 'Super User') {
  data.menus[2] = data.menus.splice();
}

export default data;
