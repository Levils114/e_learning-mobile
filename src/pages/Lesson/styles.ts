import styled from 'styled-components/native';

export const Container = styled.View`
	align-items: flex-start;
	justify-content: flex-start;

	flex: 1;

	background: #6548A3;
`;

export const SaveButton = styled.TouchableOpacity`

`;

export const InitialContainer = styled.View`
	width: 100%;

	align-items: center;

	flex-direction: row;

	padding: 18px;
`;

export const BackButton = styled.TouchableOpacity`

`;

export const LogoImage = styled.Image`
	margin: 0 auto;
	margin-left: 24%;
`;

export const LessonInformationsContainer = styled.ScrollView`
	flex: 1;
	width: 100%;

	flex-direction: column;

	background: #F0EDF5;

	padding: 18px 24px;
`;

export const LessonTitle = styled.Text`
	font-size: 30px;
	font-weight: 400;
	font-family: 'Roboto';
	color: #3D3D4C;
`;

export const LessonNumberAndTimeContainer = styled.View`
	flex-direction: row;

	align-items: center;

	margin: 12px 0px 30px 0;
`;

export const NumberText = styled.Text`
	font-size: 12px;
	font-weight: 400;
	font-family: 'Roboto';
	color: #A0A0B2;
`;

export const LessonTimeContainer = styled.View`
	flex-direction: row;

	align-items: center;

	margin-left: 8px;
`;

export const TimeText = styled.Text`
	font-size: 12px;
	font-weight: 400;
	font-family: 'Roboto';
	color: #A0A0B2;

	margin-left: 2px;
`;

export const LessonDescriptionText = styled.Text`
	font-size: 15px;
	font-weight: 400;
	font-family: 'Roboto';
	color: #6C6C80;
`;