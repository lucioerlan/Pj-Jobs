import React from 'react';
import {YellowBox} from 'react-native';
/* YellowBox.ignoreWarnings(['Expected']); */
console.disableYellowBox = true;

import Routes from './routes';

export default function App() {
  return <Routes />;
}
