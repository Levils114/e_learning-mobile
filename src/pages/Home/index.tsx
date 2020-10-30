import React, { useEffect, useState } from 'react';

import api from './../../services/api';

import {Feather} from '@expo/vector-icons';

import ScreenNavigator from './../../components/ScreenNavigator/';

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

interface ICourses{
	id: string;
	name: string;
	image: string;
}

const Home: React.FC = () => {
	const [courses, setCourses] = useState<ICourses[]>([]);

	useEffect(() => {
		async function loadApi(){
			const response = await api.get('/courses');

			setCourses(response.data);
		}

		loadApi();
	}, []);

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

			<CoursesContainer showsVerticalScrollIndicator={false}>
				<InitialTextsContainer>
					<CategoriesText>Categorias</CategoriesText>

					<CoursesNumberText>{courses.length} cursos</CoursesNumberText>
				</InitialTextsContainer>

				<CoursesCardsContainer>
					{courses.map(course => (
						<CourseCard key={course.id}>
							<CourseImage source={{uri: course.image}} />

							<CourseName>{course.name}</CourseName>
							<CourseLessonsNumber>16 aulas</CourseLessonsNumber>
						</CourseCard>
					))}
				</CoursesCardsContainer>
			</CoursesContainer>

			<ScreenNavigator whereIm="home"/>
		</Container>
	);
};

export default Home;