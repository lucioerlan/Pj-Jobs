import styled from 'styled-components';

export const Container = styled.View`
flex: 1;
backgroundColor: #FFF;
`;


export const ProfileContainer = styled.View`
height: 330; 
backgroundColor: #FFDE2B;
`;


export const TakePicture = styled.View`
flexDirection: row;
justifyContent: center;
`;

export const Avatar = styled.Image`
borderRadius: 150;
backgroundColor: #ccc;
position: absolute;
alignItems: center;
width: 150;
height: 150;
marginTop: 40px;
`;

export const DetailsProfile = styled.Text`
fontSize: 20;
marginTop: 225px;
textAlign: center;
color: #fff;
`;

export const SubDetailsProfile = styled.Text`
fontSize: 20; 
textAlign: center;
color: #fff;
`;

export const StatsContainer = styled.View`
flexDirection: row;
alignSelf: center;
marginTop: 32px;
`;

export const StatsBox = styled.View`
alignItems: center;
flex: 1;
`;

export const StatsBoxSplit = styled.View`
alignItems: center;
flex: 1;
borderColor: #DFD8C8;
borderLeftWidth: 1;
borderRightWidth: 1;
`;

export const StatsBoxSubText = styled.Text`
fontSize: 12;
color: #AEB5BC;
textTransform: uppercase;
fontWeight: 500;
`;

export const Logout = styled.View`
marginTop: 20px;
height: 100;
backgroundColor: #E0E0E0;
flex: 1;
marginLeft: 7; 
alignItems: center;
borderRadius: 20px;
`;
