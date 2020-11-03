import React from 'react';

import { useNavigation } from '@react-navigation/native';

import {Container,
		HomeContainer,
		HomeText,
		SavedCoursesContainer,
		SavedCoursesText} from './styles';

import { Feather } from '@expo/vector-icons';

interface IScreenNavigator{
	whereIm: string;
}

const ScreenNavigator: React.FC<IScreenNavigator> = ({ whereIm }: IScreenNavigator) => {
	const navigation = useNavigation();

	return(
		<Container>
			<HomeContainer whereIm={whereIm} onPress={() => navigation.navigate('home')}>
				<Feather name="home" color={whereIm === 'home' ? '#FF6680' : '#C4C4D1'} size={20}/>
				<HomeText whereIm={whereIm}>Home</HomeText>
			</HomeContainer>

			<SavedCoursesContainer whereIm={whereIm} onPress={() => navigation.navigate('saved-courses')}>
				<Feather name="heart" color={whereIm === 'saved-courses' ? '#FF6680' : '#C4C4D1'} size={20}/>
				<SavedCoursesText whereIm={whereIm}>Salvos</SavedCoursesText>
			</SavedCoursesContainer>
		</Container>
	);
};

export default ScreenNavigator;