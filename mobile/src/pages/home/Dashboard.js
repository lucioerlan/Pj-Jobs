import * as React from 'react';
import {
  Left,
  Right,
  Body,
  Thumbnail,
  Text,
  Content,
  Card,
  CardItem,
  View,
} from 'native-base';
import {Image, SafeAreaView} from 'react-native';
import api from '../../services/api';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {formatDistance, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';

export default class Dashboard extends React.Component {
  state = {
    data: [],
    loading: true,
  };

  async componentDidMount() {
    this.getusers();
  }

  getusers = async () => {
    const {data} = await api.get('/works');
    this.setState({data});
    this.setState({loading: false});
  };

  render() {
    if (this.state.loading) {
      return (
        <SafeAreaView>
          {Array.from({length: 20}).map((_, index) => (
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
                        height: 190,
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
      <Content>
        {this.state.data.map(home => (
          <Card key={home.id}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: home.company_avatar}} />
                <Body>
                  <Text>{home.company_name}</Text>
                  <Text note>{home.job_description}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{uri: home.job_image}}
                style={{height: 200, width: null, flex: 1}}
              />
            </CardItem>
            <CardItem>
              <Body />
              <Right>
                <Text note>
                  {' '}
                  há{' '}
                  {formatDistance(parseISO(home.created_at), new Date(), {
                    locale: pt,
                  })}
                </Text>
              </Right>
            </CardItem>
          </Card>
        ))}
      </Content>
    );
  }
}
