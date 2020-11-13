import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	align-items: flex-start;
	justify-content: flex-start;

	background: #6548A3;

	padding-bottom: 52px;
`;

export const InitialContainer = styled.View`
	width: 100%;

	flex-direction: row;

	padding: 24px;
`;

export const ButtonToLogout = styled.TouchableOpacity`

`;

export const LogoImage = styled.Image`
	margin-right: auto;
`;

export const SearchInputContainer = styled.View`
	width: 85%;

	flex-direction: row;

	align-items: center;

	margin: 12px 0 24px 24px;

	background: #FFFFFF;

	padding: 4px 12px;

	border-radius: 32px;
`;

export const SearchInput = styled.TextInput`
	margin-left: 12px;
`;

export const CoursesContainer = styled.ScrollView`
	width: 100%;

	flex: 1;

	background: #F0EDF5;

	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
`;

export const InitialTextsContainer = styled.View`
	width: 100%;

	align-items: center;

	flex-direction: row;

	padding: 18px 18px 0;
`;

export const CategoriesText = styled.Text`
	font-size: 20px;
	font-weight: 400;
	font-family: 'Roboto';
	color: #3D3D4C;
`;

export const CoursesNumberText = styled.Text`
	margin-left: auto;

	font-size: 15px;
	font-weight: 400;
	font-family: 'Roboto';
	color: #A0A0B2;
`;

export const CoursesCardsContainer = styled.View`
	width: 100%;

	padding: 0 18px;

	margin: 26px auto 0;

	flex-direction: row;

	flex-wrap: wrap;
`;

export const CourseCard = styled.TouchableOpacity`
	padding: 18px 40px 26px 18px;

	background: #FFFFFF;

	align-items: flex-start;
	justify-content: flex-start;

	width: 156px;
	height: 172px;

	margin: 0 6px 16px 0;

	border-radius: 24px;
`;

export const CourseImage = styled.Image`
	width: 64px;
	height: 64px;
`;

export const CourseName = styled.Text`
	width: 80%;

	margin: 18px 0 2px 0;

	font-size: 15px;
	font-weight: 400;
	font-family: 'Roboto';
	color: #6C6C80;
`;

export const CourseLessonsNumber = styled.Text`
	font-size: 10px;
	font-weight: 400;
	font-family: 'Roboto';
	color: #C4C4D1;
`;