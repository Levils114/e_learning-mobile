import React, { useEffect, useState, useCallback } from 'react';

import api from './../../services/api';

import {Feather} from '@expo/vector-icons';

import ScreenNavigator from './../../components/ScreenNavigator/';

import { useNavigation } from '@react-navigation/native';

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

import logoImg from './../../../assets/Pages/Home/Logotipo.png';
import math from './../../../assets/Pages/Home/math.png';

interface ICourses{
	id: string;
	name: string;
	image: string;
	lessonsInCourse: number;
}

const Home: React.FC = () => {
	const navigation = useNavigation();

	const [courses, setCourses] = useState<ICourses[]>([]);
	const [coursesSearched, setCoursesSearched] = useState<ICourses[]>([]);

	const [coursesToSearch, setCoursesToSearch] = useState('');

	useEffect(() => {
		async function loadApi(){
			const response = await api.get('/courses');

			setCourses(response.data);
		}

		loadApi();
	}, []);

	const searchCourses = useCallback(() => {
		const coursesFinded = courses.filter(course => {
			return (course.name.toLowerCase().includes(coursesToSearch.toLowerCase()));
		});

		setCoursesSearched(coursesFinded);
	}, [coursesToSearch]);

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
					onChangeText={e => {
						setCoursesToSearch(e);
						searchCourses();
					}}
					value={coursesToSearch}
				/>
			</SearchInputContainer>

			<CoursesContainer showsVerticalScrollIndicator={false}>
				<InitialTextsContainer>
					<CategoriesText>Categorias</CategoriesText>

					<CoursesNumberText>{coursesToSearch === '' ? courses.length : coursesSearched.length} cursos</CoursesNumberText>
				</InitialTextsContainer>

				<CoursesCardsContainer>
					{coursesToSearch === '' ? courses.map(course => (
						<CourseCard key={course.id} onPress={() => navigation.navigate('courseLessons', {course_id: course.id})}>
							<CourseImage source={{uri: course.image}} />

							<CourseName>{course.name}</CourseName>
							<CourseLessonsNumber>{course.lessonsInCourse} Aulas</CourseLessonsNumber>
						</CourseCard>
					)) : coursesSearched.map(course => (
						<CourseCard key={course.id} onPress={() => navigation.navigate('courseLessons', {course_id: course.id})}>
							<CourseImage source={{uri: course.image}} />

							<CourseName>{course.name}</CourseName>
							<CourseLessonsNumber>{course.lessonsInCourse} Aulas</CourseLessonsNumber>
						</CourseCard>
					))}
				</CoursesCardsContainer>
			</CoursesContainer>

			<ScreenNavigator whereIm="home"/>
		</Container>
	);
};

export default Home;