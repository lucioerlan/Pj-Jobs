import * as React from 'react';
import {
  View,
  Left,
  Right,
  Body,
  List,
  ListItem,
  Thumbnail,
  Text,
} from 'native-base';
import {SafeAreaView} from 'react-native';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {formatDistance, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';

export default class App extends React.Component {
  state = {
    data: [],
    loading: true,
  };

  async componentDidMount() {
    this.getusers();
  }

  getusers = async () => {
    const {data} = await api.get(`/works`);
    this.setState({
      data,
      loading: false,
    });
  };

  render() {
    if (this.state.loading) {
      return (
        <SafeAreaView>
          {Array.from({length: 1}).map((_, index) => (
            <View
              key={index}
              style={{marginTop: 20, marginLeft: 25, marginBottom: 9}}>
              <SkeletonPlaceholder highlightColor="#e8f7ff">
                <View style={{flexDirection: 'row'}}>
                  <View style={{width: 45, height: 45, borderRadius: 50}} />
                  <View
                    style={{
                      justifyContent: 'space-between',
                      marginLeft: 5,
                      flex: 1,
                    }}>
                    <View
                      style={{
                        marginTop: 70,
                        marginLeft: -100,
                        width: '250%',
                        height: 100,
                      }}
                    />
                  </View>
                </View>
              </SkeletonPlaceholder>
            </View>
          ))}
        </SafeAreaView>
      );
    }

    return (
      <React.Fragment>
        {this.state.data.map(message => (
          <List>
            <ListItem avatar key={message.id}>
              <Left>
                <Thumbnail source={{uri: message.avatar_image}} />
              </Left>
              <Body>
                <Text>{message.nome}</Text>
                <Text note>{message.message}</Text>
              </Body>
              <Right>
                <Text note>
                  {' '}
                  há{' '}
                  {formatDistance(parseISO(message.created_at), new Date(), {
                    locale: pt,
                  })}
                </Text>
              </Right>
            </ListItem>
          </List>
        ))}
      </React.Fragment>
    );
  }
}
