import React from 'react';

import {Feather} from '@expo/vector-icons';

import {Container,
		InitialContainer,
		ButtonToLogout,
		LogoImage,
		SearchInputContainer,
		SearchInput,
		CoursesContainer,
		InitialTextsContainer,
		CategoriesText,
		CoursesNumberText,
		CoursesCardsContainer,
		CourseCard,
		CourseImage,
		CourseName,
		CourseLessonsNumber} from './styles';

import logoImg from './../../../assets/Pages/Home/logoImg.png';
import math from './../../../assets/Pages/Home/math.png';

const Home: React.FC = () => {
	return(
		<Container>
			<InitialContainer>
				<LogoImage source={logoImg}/>

				<ButtonToLogout>
					<Feather name="power" color="#FF6680" size={24}/>
				</ButtonToLogout>
			</InitialContainer>

			<SearchInputContainer>
				<Feather name="search" color="#C4C4D1" size={20}/>

				<SearchInput 
					placeholder="Busque um curso"
					placeholderTextColor="#C4C4D1" 
				/>
			</SearchInputContainer>

			<CoursesContainer>
				<InitialTextsContainer>
					<CategoriesText>Categorias</CategoriesText>

					<CoursesNumberText>43 cursos</CoursesNumberText>
				</InitialTextsContainer>

				<CoursesCardsContainer>
					<CourseCard>
						<CourseImage source={math}/>

						<CourseName>Matemática</CourseName>
						<CourseLessonsNumber>16 aulas</CourseLessonsNumber>
					</CourseCard>

					<CourseCard>
						<CourseImage source={math}/>

						<CourseName>Matemática</CourseName>
						<CourseLessonsNumber>16 aulas</CourseLessonsNumber>
					</CourseCard>

					<CourseCard>
						<CourseImage source={math}/>

						<CourseName>Matemática</CourseName>
						<CourseLessonsNumber>16 aulas</CourseLessonsNumber>
					</CourseCard>

					<CourseCard>
						<CourseImage source={math}/>

						<CourseName>Matemática</CourseName>
						<CourseLessonsNumber>16 aulas</CourseLessonsNumber>
					</CourseCard>
				</CoursesCardsContainer>
			</CoursesContainer>
		</Container>
	);
};

export default Home;