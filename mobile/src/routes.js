import React from 'react';
import {Text} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
Icon.loadFont();

import Intro from './pages/intro';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Dashboard from './pages/home';
import Profile from './pages/profile';

const Home = createStackNavigator({
  Dashboard: {screen: Dashboard, navigationOptions: {header: false}},
});

const BottomTabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        tabBarLabel: <Text style={{color: 'white'}} />,
        //barStyle: { backgroundColor: "#0e141d" },
        tabBarIcon: ({focused}) => (
          <Icon
            name="home"
            size={22}
            color={focused ? 'rgb(22, 19, 1)' : '#AEAEAE'}
          />
        ),
      }),
    },
    Profile: {
      screen: Profile,
      navigationOptions: () => ({
        tabBarLabel: <Text style={{color: 'rgb(22, 19, 1)'}} />,
        tabBarIcon: ({focused}) => (
          <Icon
            name="user"
            size={22}
            color={focused ? 'rgb(22, 19, 1)' : '#AEAEAE'}
          />
        ),
      }),
    },
  },
  {
    barStyle: {
      backgroundColor: 'transparent',
    },
  },
);
const AppStackNavigator = createSwitchNavigator({
  Intro: Intro,
  SignIn: SignIn,
  SignUp: SignUp,
  BottomTabNavigator: BottomTabNavigator,
});

export default createAppContainer(AppStackNavigator);
