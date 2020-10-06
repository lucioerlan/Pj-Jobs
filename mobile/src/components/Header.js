import * as React from 'react';
import {Header} from 'native-base';
import {StyleSheet} from 'react-native';

const App = () => (
  <Header androidStatusBarColor="#FFDE2B" style={styles.header} hasTabs />
);

const styles = StyleSheet.create({
  tabHeading: {
    backgroundColor: '#FFDE2B',
  },
  header: {
    backgroundColor: '#FFDE2B',
  },
  container: {
    flex: 1,
  },
});

export default App;
