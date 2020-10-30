import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;

	background: #6548A3;
`;

export const BackgroundImage = styled.ImageBackground`
	flex: 1;
    resize-mode: cover;
    justify-content: center;
`;

export const PersonImage = styled.Image`
	margin: 0 auto 0 24px;
`;

export const Title = styled.Text`
	width: 75%;

	font-size: 38px;
	font-weight: 500;
	font-family: 'Roboto';
	color: #FF6680;

	margin: 12px auto 12px 24px;
`;

export const Description = styled.Text`
	width: 65%;

	font-size: 15px;
	font-weight: 500;
	font-family: 'Roboto';
	color: #EDEBF5;

	margin: 0 auto 0 24px;
`;

export const StartButton = styled.TouchableOpacity`
	width: 85%;

	margin: 32px auto 0 24px;

	align-items: center;
	justify-content: center;

	background: #FF6680;

	padding: 16px;

	border-radius: 32px;
`;

export const StartButtonText = styled.Text`
	font-size: 15px;
	font-weight: 500;
	font-family: 'Roboto';
	color: #FFFFFF;
`;