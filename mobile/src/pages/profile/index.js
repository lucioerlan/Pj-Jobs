import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Feather';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
Icon.loadFont();
import {
  Container,
  ProfileContainer,
  TakePicture,
  Avatar,
  DetailsProfile,
  SubDetailsProfile,
  StatsContainer,
  StatsBoxSplit,
  StatsBoxSubText,
  Logout,
} from './styles';
import Header from '../../components/Header';
import api from '../../services/api';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };
  }

  async componentDidMount() {
    this.getusers();
  }

  getusers = async () => {
    const {data} = await api.get('/userauth');
    this.setState({data});
    this.setState({loading: false});
  };

  clearAsyncStorage = async () => {
    AsyncStorage.clear();
    this.props.navigation.navigate('SignIn');
    console.log('Logged Out.');
  };

  render() {
    if (this.state.loading) {
      return (
        <SafeAreaView>
          {Array.from({length: 1}).map((_, index) => (
            <SkeletonPlaceholder highlightColor="#e8f7ff">
              <View
                style={{
                  flexDirection: 'column',
                  padding: 100,
                  alignItems: 'center',
                }}>
                <View style={{width: 150, height: 150, borderRadius: 150}} />
                <View style={{marginTop: 40, width: 120, height: 10}} />
                <View style={{marginTop: 20, width: 150, height: 10}} />
                <View style={{marginTop: 80, width: 350, height: 15}} />
                <View style={{marginTop: 20, width: 350, height: 15}} />
                <View
                  style={{
                    marginTop: 40,
                    borderRadius: 20,
                    width: 400,
                    height: 90,
                  }}
                />
              </View>
            </SkeletonPlaceholder>
          ))}
        </SafeAreaView>
      );
    }
    return (
      <Container>
        <Header />
        {this.state.data.map(home => (
          <ScrollView>
            <ProfileContainer>
              <TakePicture>
                <Avatar source={require('../../images/user.png')} />
              </TakePicture>
              <DetailsProfile>{home.username}</DetailsProfile>
              <SubDetailsProfile>{home.email}</SubDetailsProfile>
            </ProfileContainer>
            <StatsContainer>
              <StatsBoxSplit>
                <Text style={{fontSize: 24}}>{home.phone}</Text>
                <StatsBoxSubText>Phone</StatsBoxSubText>
              </StatsBoxSplit>
            </StatsContainer>
            <Logout>
              <TouchableOpacity onPress={() => this.clearAsyncStorage()}>
                <Icon
                  name="log-out"
                  style={{marginTop: 5, fontSize: 50, color: '#FF4858'}}
                />
                <Text style={{marginTop: 5, color: 'black', fontSize: 18}}>
                  Sair
                </Text>
              </TouchableOpacity>
            </Logout>
          </ScrollView>
        ))}
      </Container>
    );
  }
}
