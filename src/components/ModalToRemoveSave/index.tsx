import React from 'react';

import {Container,
		ModalContainer,
		QuestionText,
		ButtonsContainer,
		CloseModalButton,
		CloseModalButtonText,
		ConfirmRemoveSaveButton,
		ConfirmRemoveSaveButtonText} from './styles';

import { Feather } from '@expo/vector-icons';

interface IModalToRemoveSave{
	course_name: string
	functionToCloseModal(): void;
	functionToRemoveSave(): void;
}

const ModalToRemoveSave: React.FC<IModalToRemoveSave> = ({ course_name, functionToCloseModal, functionToRemoveSave }: IModalToRemoveSave) => {
	return(
		<Container>
			<ModalContainer>
				<Feather name="trash" color="#FF6680" size={48}/>

				<QuestionText>Quer excluir suas aulas de {course_name}?</QuestionText>

				<ButtonsContainer>
					<CloseModalButton onPress={functionToCloseModal}>
						<CloseModalButtonText>Não!</CloseModalButtonText>
					</CloseModalButton>

					<ConfirmRemoveSaveButton onPress={functionToRemoveSave}>
						<ConfirmRemoveSaveButtonText>Com certeza</ConfirmRemoveSaveButtonText>
					</ConfirmRemoveSaveButton>
				</ButtonsContainer>
			</ModalContainer>
		</Container>
	);
};

export default ModalToRemoveSave;