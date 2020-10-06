import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  justifyContent: center;
  flexDirection: row;
  backgroundColor: #ffffff;
  padding: 100px;
`;

export const ContainerSkeleton = styled.View`
  flex: 1;
  justifyContent: center;
  flexDirection: column;
  backgroundColor: #ffffff;
  padding: 100px;
`;

export const WelcomeText = styled.Text`
  paddingHorizontal: 0px;
  marginBottom: 50px;
  fontSize: 25px;
  color: #000;
  fontWeight: bold;
`;

export const TitleContainer = styled.View`
  borderTopColor: #fafafa;
  borderTopWidth: 0;
  padding: 10px;
  flexDirection: row;
  justifyContent: space-around;
`;

export const Title = styled.Text`
  fontsize: 25;
  color: #ffffff;
`;

export const DateHourTitle = styled.Text`
  padding: 10px;
  color: #ffffff;
  fontWeight: bold;
`;

export const Description = styled.Text`
  display: flex;
  textAlign: center;
  padding: 15px;
  margin: 40px;
  fontsize: 15;
  color: #ffffff;
  lineHeight: 30px;
`;
