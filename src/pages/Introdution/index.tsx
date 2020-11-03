import React from 'react';

import { useNavigation } from '@react-navigation/native';

import {Container,
		BackgroundImage,
		PersonImage,
		Title,
		Description,
		StartButton,
		StartButtonText} from './styles';

import backgroundImage from './../../../assets/Pages/Introdution/e_learningLogo.png';
import personImage from './../../../assets/Pages/Introdution/personImg.png';

const Introdution: React.FC = () => {
	const navigation = useNavigation();

	return(
		<Container>
			<BackgroundImage source={backgroundImage}>
				<PersonImage source={personImage}/>

				<Title>Aprenda da melhor forma</Title>
				<Description>Entre na plataforma e acesse cursos de diversas áreas de conhecimento.</Description>
			
				<StartButton onPress={() => navigation.navigate('home')}>
					<StartButtonText>Começar os estudos</StartButtonText>
				</StartButton>
			</BackgroundImage>
		</Container>
	);
};

export default Introdution;