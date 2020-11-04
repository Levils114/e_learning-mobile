import styled from 'styled-components/native';

export const Container = styled.View`
	width: 100%;
	height: 109%;

	background: rgba(0,0,0,0.2);

	position: absolute;
	top: 0;
	left: 0;
	z-index: 3;
`;

export const ModalContainer = styled.View`
	width: 277px;
	height: 242px;

	position: absolute;
	top: 28%;
	left: 12%;
	z-index: 4;

	border-radius: 16px;

	background: #FFFFFF;

	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const QuestionText = styled.Text`
	width: 55%;

	text-align: center;

	margin: 16px 0;

	font-size: 15px;
	font-weight: 400;
	font-family: 'Roboto';
	color: #6C6C80;
`;

export const ButtonsContainer = styled.View`
	flex-direction: row;

	align-items: center;

	margin: 0 auto;
`;

export const CloseModalButton = styled.TouchableOpacity`
	margin-left: 12px;
`;

export const CloseModalButtonText = styled.Text`
	font-size: 15px;
	font-weight: 400;
	font-family: 'Roboto';
	color: #FF6680;
`;

export const ConfirmRemoveSaveButton = styled.TouchableOpacity`
	margin-left: 16px;

	padding: 12px 24px;

	border-radius: 100px;

	background: #FF6680;
`;

export const ConfirmRemoveSaveButtonText = styled.Text`
	font-size: 15px;
	font-weight: 400;
	font-family: 'Roboto';
	color: #FFFFFF;
`;