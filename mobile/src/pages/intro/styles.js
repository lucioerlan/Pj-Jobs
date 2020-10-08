import styled from 'styled-components';

const ActiveDot = styled.View`
  backgroundColor: rgb(33, 33, 33);
  height: 8px;
  width: 12px;
  borderRadius: 4px;
  marginHorizontal: 5px;
  marginVertical: 3px;
`;

const ButtonTextSignUp = styled.Text`
  margin: 5px;
  borderWidth: 1px;
  border: 1px solid rgb(33, 33, 33);
  color: rgb(33, 33, 33);
  fontWeight: bold;
  fontSize: 20px;
  paddingTop: 10px;
  paddingBottom: 10px;
  paddingRight: 20px;
  paddingLeft: 20px;
  textAlign: center;
  borderRadius: 50px;
`;

const ButtonTextSignIn = styled.Text`
  paddingTop: 10px;
  paddingBottom: 10px;
  paddingRight: 30px;
  paddingLeft: 30px;
  backgroundColor: rgb(33, 33, 33);
  color: white;
  fontWeight: bold;
  fontSize: 20px;
  paddingTop: 11px;
  paddingBottom: 11px;
  textAlign: center;
  borderRadius: 50px;
`;

const ButtonWrapper = styled.View`
  justifyContent: center;
  alignItems: center;
  marginTop: 20px;
  width: 100%;
  flexDirection: row;
`;

const Dot = styled.View`
  backgroundColor: gray;
  height: 8px;
  width: 8px;
  borderRadius: 4px;
  marginHorizontal: 5px;
  marginVertical: 3px;
`;

const Footer = styled.View`
  width: 100%;
  height: 225px;
  backgroundColor: #fff;
`;

const Header = styled.View`
  flex: 1;
  backgroundColor: #fff;
  justifyContent: center;
  alignItems: center;
`;

const ImageFeed = styled.Image`
  width: 90%;
  height: 70%;
`;

const Slide = styled.View`
  flex: 1;
  backgroundColor: blue;
`;

const TextDescription = styled.Text`
  textAlign: center;
  fontSize: 16px;
  color: #686868;
  marginTop: 18px;
  marginLeft: 30px;
  marginRight: 30px;
`;

const Title = styled.Text`
  fontSize: 25px;
  fontWeight: bold;
  textAlign: center;
  color: rgb(33, 33, 33);
`;

export {ActiveDot,ButtonWrapper,ButtonTextSignUp,ButtonTextSignIn,Dot,Footer,Header,ImageFeed,Slide,TextDescription,Title,};
