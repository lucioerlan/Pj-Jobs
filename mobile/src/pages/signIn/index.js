import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Animated,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import {
  Button,
  ButtonText,
  Container,
  ErrorMessage,
  Form,
  Input,
  Logo,
  SignUpLink,
  SignUpText,
  SignupWrapper,
} from './styles';
import api from '../../services/api';

const AnimatedTextInput = Animated.createAnimatedComponent(Input);

const createAnimationStyle = (animation) => {
  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-5, 0],
  });

  return {
    opacity: animation,
    transform: [
      {
        translateY,
      },
    ],
  };
};

export default class SignIn extends Component {
  state = {
    email: 'superuser@dev.com',
    password: '123456',
    error: '',
    styledEmail: new Animated.Value(0),
    styledPassword: new Animated.Value(0),
    button: new Animated.Value(0),
  };

  handleEmailChange = (email) => {
    this.setState({email});
  };

  handlePasswordChange = (password) => {
    this.setState({password});
  };

  handleCreateAccountPress = () => {
    this.props.navigation.navigate('SignUp');
  };

  onFocus(value) {
    this.setState({
      borderColor: value,
    });
  }

  handleSignInPress = async () => {
    if (!this.state.email || !this.state.password) {
      this.setState(
        {error: 'Fill in username and password to continue!'},
        () => false,
      );
    } else {
      try {
        const response = await api.post('/sessions', {
          email: this.state.email,
          password: this.state.password,
        });

        await AsyncStorage.setItem('@Token', response.data.token);

        const resetAction = StackActions.reset({
          index: 0,
          key: null,
          actions: [NavigationActions.navigate({routeName: 'Dashboard'})],
        });
        this.props.navigation.dispatch(resetAction);
      } catch (_err) {
        this.setState({
          error: 'There was a problem with the login, check your credentials!',
        });
      }
    }
  };

  componentDidMount() {
    Animated.stagger(500, [
      Animated.timing(this.state.styledEmail, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(this.state.styledPassword, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(this.state.button, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }

  render() {
    const emailStyle = createAnimationStyle(this.state.styledEmail);
    const passwordStyle = createAnimationStyle(this.state.styledPassword);
    const buttonStyle = createAnimationStyle(this.state.button);

    return (
      <Container>
        <ImageBackground
          source={require('../../images/backgroundsignIn.png')}
          resizeMode="cover"
          style={[StyleSheet.absoluteFill, {width: null, height: null}]}
        />
        <StatusBar hidden />

        <Form>
          <Logo
            source={require('../../images/EcorpLogo.png')}
            resizeMode="contain"
            style={{marginTop: 50, marginBottom: 50}}
          />

          <AnimatedTextInput
            ref={(styledEmail) => (this._styledEmail = styledEmail)}
            style={[emailStyle]}
            placeholderTextColor="#fff"
            placeholder="E-mail"
            value={this.state.email}
            onFocus={() => this.onFocus('email')}
            onChangeText={this.handleEmailChange}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <AnimatedTextInput
            style={[passwordStyle]}
            placeholderTextColor="#fff"
            placeholder="Password"
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            autoCapitalize="none"
            autoCorrect={false}
            onFocus={() => this.onFocus('password')}
            secureTextEntry
          />

          {this.state.error.length !== 0 && (
            <ErrorMessage>{this.state.error}</ErrorMessage>
          )}

          <Button onPress={this.handleSignInPress}>
            <Animated.View style={[buttonStyle]}>
              <ButtonText>LOG IN</ButtonText>
            </Animated.View>
          </Button>

          <SignupWrapper>
            <SignUpText>Don't have account?</SignUpText>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignUp')}>
              <SignUpLink>  Signup</SignUpLink>
            </TouchableOpacity>
          </SignupWrapper>
        </Form>
        <KeyboardSpacer />
      </Container>
    );
  }
}
