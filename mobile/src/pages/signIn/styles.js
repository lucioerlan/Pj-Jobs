import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  justifyContent: center;
  paddingHorizontal: 20;
`;

const Logo = styled.Image`
  height: 20%;
`;

const Form = styled.View`
  alignItems: center;
  backgroundColor: rgba(0, 0, 0, 0.25);
`;

const Input = styled.TextInput`
  alignSelf: stretch;
  border: 1px solid #fff;
  color: #fff;
  paddingHorizontal: 20px;
  paddingVertical: 15px;
  marginBottom: 20px;
  marginHorizontal: 20px;
  fontSize: 16px;
`;

const ErrorMessage = styled.Text`
  color: #ce2029;
  fontSize: 16px;
  fontWeight: bold;
  textAlign: center;
  marginBottom: 15px;
  marginHorizontal: 20px;
`;

const Button = styled.TouchableOpacity`
  alignSelf: stretch;
  borderRadius: 5px;
  border: 1px solid #fff;
  color: #fff;
  padding: 15px;
  marginVertical: 15px;
  marginHorizontal: 80px;
`;

const ButtonText = styled.Text`
  color: #fff;
  fontWeight: bold;
  fontSize: 16px;
  textAlign: center;
`;

const SignupWrapper = styled.View`
  flexDirection: row;
  justifyContent: center;
  marginHorizontal: 15px;
  marginTop: 10px;
  marginTop: 20px;
`;

const SignUpText = styled.Text`
  color: #f5f5f5;
`;

const SignUpLink = styled.Text`
  color: #0366d6;
  fontSize: 15px;
  fontWeight: 600;
`;

export {
  Button,
  ButtonText,
  Container,
  ErrorMessage,
  Form,
  Input,
  Logo,
  SignUpText,
  SignUpLink,
  SignupWrapper,
};
