import styled from 'styled-components/native';

interface IPlayerContainer{
	is_completed: boolean;
}

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

	padding: 28px;
`;

export const BackButton = styled.TouchableOpacity`

`;

export const LogoImage = styled.Image`
	margin: 0 auto;
`;

export const LessonsContainer = styled.View`
	width: 100%;
	flex: 1;

	flex-direction: column;

	background: #F0EDF5;

	border-top-left-radius: 24px;
	border-top-right-radius: 24px;

	padding: 0 18px;
`;

export const CourseInformationsContainer = styled.View`
	width: 100%;

	align-items: center;

	flex-direction: row;

	margin: 24px 0 12px 0;
`;

export const CourseName = styled.Text`
	width: 70%;

	font-size: 30px;
	font-weight: 400;
	font-family: 'Roboto';
	color: #3D3D4C;
`;

export const LessonsNumber = styled.Text`
	font-size: 15px;
	font-weight: 400;
	font-family: 'Roboto';
	color: #A0A0B2;

	margin-left: auto;
`;

export const LessonContainer = styled.TouchableOpacity`
	align-self: flex-end;

	width: 90%;

	background: #FFFFFF;

	border-radius: 16px;

	padding: 24px;

	margin: 12px 0;

	position: relative;
`;

export const PlayerContainer = styled.View<IPlayerContainer>`
	padding: 20px 20px 20px 24px;

	background: ${props => !!props.is_completed ? '#61C5BD' : '#FF6680'};

	border-radius: 16px;

	position: absolute;
	left: -36px;
	top: 32%;
`;

export const LessonName = styled.Text`
	width: 100%;

	font-size: 20px;
	font-weight: 400;
	font-family: 'Roboto';
	color: #6C6C80;

	margin-bottom: 12px;
	margin-left: 16px;
`;

export const LessonInfomationsContainer = styled.View`
	align-items: center;

	flex-direction: row;

	margin-left: 16px;
`;

export const LessonNumber = styled.Text`
	font-size: 10px;
	font-weight: 400;
	font-family: 'Roboto';
	color: #C4C4D1;
`;

export const LessonTimeConatainer = styled.View`
	width: 50%;

	align-items: center;

	flex-direction: row;

	margin-left: 8px;
`;

export const LessonTimeText = styled.Text`
	font-size: 10px;
	font-weight: 400;
	font-family: 'Roboto';
	color: #C4C4D1;

	margin-left: 4px;
`;

export const LessonCompleteContainer = styled.View`
	margin-left: auto;

	background: #61C5BD;

	padding: 4px 8px;

	border-radius: 12px;
`;

export const LessonCompleteText = styled.Text`
	font-size: 10px;
	font-weight: 400;
	font-family: 'Roboto';
	color: #FFFFFF;
`;