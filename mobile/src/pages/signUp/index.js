import React, {Component} from 'react';
import {
  Animated,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import {
  Button,
  ButtonText,
  Container,
  SuccessMessage,
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

const createAnimationStyle = animation => {
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
    error: '',
    success: '',
    styledUsername: new Animated.Value(0),
    styledEmail: new Animated.Value(0),
    styledPhone: new Animated.Value(0),
    styledPassword: new Animated.Value(0),
    button: new Animated.Value(0),
  };

  handleUsernameChange = username => {
    this.setState({username});
  };

  handleEmailChange = email => {
    this.setState({email});
  };

  handlePhoneChange = phone => {
    this.setState({phone});
  };

  handlePasswordChange = password => {
    this.setState({password});
  };

  goToLogin = () => {
    this.props.navigation.navigate('SignIn');
  };

  onFocus(value) {
    this.setState({
      borderColor: value,
    });
  }

  handleSignUpPress = async () => {
    if (
      !this.state.username ||
      !this.state.email ||
      !this.state.phone ||
      !this.state.password
    ) {
      this.setState({error: 'Fill in all fields to continue!'}, () => false);
    } else {
      try {
        await api.post('/users', {
          username: this.state.username,
          email: this.state.email,
          phone: this.state.phone,
          password: this.state.password,
        });

        this.setState({
          success: 'Account created successfully! Redirecting to login',
          error: '',
        });

        setTimeout(this.goToLogin, 2500);
      } catch (_err) {
        this.setState({
          error:
            'There was a problem with the registration, check the completed data!',
        });
      }
    }
  };

  componentDidMount() {
    Animated.stagger(500, [
      Animated.timing(this.state.styledUsername, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(this.state.styledEmail, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(this.state.styledPhone, {
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
    const UsernameStyle = createAnimationStyle(this.state.styledUsername);
    const emailStyle = createAnimationStyle(this.state.styledEmail);
    const PhoneStyle = createAnimationStyle(this.state.styledPhone);
    const passwordStyle = createAnimationStyle(this.state.styledPassword);
    const buttonStyle = createAnimationStyle(this.state.button);

    return (
      <Container>
        <ImageBackground
          source={require('../../images/backgroundsignUp.png')}
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
          {this.state.success.length !== 0 && (
            <SuccessMessage>{this.state.success}</SuccessMessage>
          )}
          <AnimatedTextInput
            style={[UsernameStyle]}
            placeholderTextColor="#fff"
            placeholder="Username"
            value={this.state.username}
            onFocus={() => this.onFocus('username')}
            onChangeText={this.handleUsernameChange}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <AnimatedTextInput
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
            style={[PhoneStyle]}
            placeholderTextColor="#fff"
            placeholder="Phone"
            value={this.state.phone}
            onFocus={() => this.onFocus('phone')}
            onChangeText={this.handlePhoneChange}
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

          <Button onPress={this.handleSignUpPress}>
            <Animated.View style={[buttonStyle]}>
              <ButtonText>CREATE ACCOUNT</ButtonText>
            </Animated.View>
          </Button>

          <SignupWrapper>
            <SignUpText>Go to</SignUpText>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignIn')}>
              <SignUpLink>  Login</SignUpLink>
            </TouchableOpacity>
          </SignupWrapper>
        </Form>
        <KeyboardSpacer />
      </Container>
    );
  }
}
