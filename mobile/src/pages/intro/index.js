import React, {Component} from 'react';
import {StatusBar, TouchableWithoutFeedback} from 'react-native';
import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';
import {
  ActiveDot,
  ButtonWrapper,
  ButtonTextSignUp,
  ButtonTextSignIn,
  Dot,
  Footer,
  Header,
  ImageFeed,
  Slide,
  TextDescription,
  Title,
} from './styles';

export default class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationSignup: '',
      animationLogin: '',
    };
  }

  onIndexChanged(index) {
    if (index == 1) {
      this.setState({
        animationLogin: 'bounceInRight',
        animationSignup: 'bounceInLeft',
      });
    } else {
      this.setState({
        animationLogin: '',
        animationSignup: '',
      });
    }
  }

  render() {
    return (
      <Swiper
        loop={false}
        dot={<Dot />}
        activeDot={<ActiveDot />}
        onIndexChanged={index => {
          this.onIndexChanged(index);
        }}>
        {/* Slide 1 */}

        <Slide>
          <StatusBar hidden />
          <Header>
            <ImageFeed
              source={require('../../images/intro1.png')}
              resizeMode="stretch"
            />
          </Header>
          <Footer>
            <Title>Get hired right now</Title>
            <TextDescription>
              Sometimes taking the first step is the most difficult!
            </TextDescription>
          </Footer>
        </Slide>

        {/* Slide 1 End */}

        {/* Slide 2 */}

        <Slide>
          <Header>
            <ImageFeed
              source={require('../../images/intro2.png')}
              resizeMode="stretch"
            />
          </Header>
          <Footer>
            <Title>Get started today</Title>
            <TextDescription>Turn your dreams into goals!</TextDescription>
          </Footer>
        </Slide>

        {/* Slide 2 End */}

        {/* Slide 3 */}

        <Slide>
          <Header>
            <ImageFeed
              source={require('../../images/intro3.png')}
              resizeMode="stretch"
            />
          </Header>
          <Footer>
            <Title>Sign Up Free</Title>
            <TextDescription>
              Start making your dreams come true TODAY!
            </TextDescription>
            <ButtonWrapper>
              <Animatable.View
                animation={this.state.animationSignup}
                iterationCount={1}
                delay={0}
                duration={1500}
                useNativeDriver>
                <TouchableWithoutFeedback
                  onPress={() => this.props.navigation.navigate('SignUp')}
                  style={{marginRight: 10}}>
                  <ButtonTextSignUp>Sign Up</ButtonTextSignUp>
                </TouchableWithoutFeedback>
              </Animatable.View>

              <Animatable.View
                animation={this.state.animationLogin}
                iterationCount={1}
                delay={0}
                duration={1500}
                useNativeDriver>
                <TouchableWithoutFeedback
                  onPress={() => this.props.navigation.navigate('SignIn')}
                  style={{marginRight: 10}}>
                  <ButtonTextSignIn>Login</ButtonTextSignIn>
                </TouchableWithoutFeedback>
              </Animatable.View>
            </ButtonWrapper>
          </Footer>
        </Slide>

        {/* Slide 3 End */}
      </Swiper>
    );
  }
}
