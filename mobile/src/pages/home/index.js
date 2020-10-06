import * as React from 'react';
import {Container, Icon, View, Tab, Tabs, TabHeading} from 'native-base';
import {StyleSheet} from 'react-native';
import Message from './Message';
import Header from '../../components/Header';
import Dashboard from './Dashboard';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <View style={styles.container}>
          <Tab heading={<TabHeading style={styles.tabHeading} />}>
            <Dashboard />
          </Tab>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  tabHeading: {
    backgroundColor: '#FFDE2B',
  },
  container: {
    flex: 1,
  },
});
