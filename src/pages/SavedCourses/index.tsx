import React, { useEffect, useState, useCallback } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {Feather} from '@expo/vector-icons';

import ModalToRemoveSave from './../../components/ModalToRemoveSave/';
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
		CourseImageAndExcludeOptionContainer,
		CourseImage,
		ButtonToRemoveSave,
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

const SavedCourses: React.FC = () => {
	const navigation = useNavigation();

	const [courses, setCourses] = useState<ICourses[]>([]);
	const [coursesSearched, setCoursesSearched] = useState<ICourses[]>([]);

	const [coursesToSearch, setCoursesToSearch] = useState('');

	const [courseID, setCourseID] = useState('');
	const [courseName, setCourseName] = useState('');

	const [openModalToRemoveSave, setOpenModalToRemoveSave] = useState(false);

	useEffect(() => {
		async function loadApi(){
			const savedCourses = await AsyncStorage.getItem('@e_learning:saved-courses');

			if(!!savedCourses){
				setCourses(JSON.parse(savedCourses));
			}
		}

		loadApi();
	}, [courseID]);

	const searchCourses = useCallback(() => {
		const coursesFinded = courses.filter(course => {
			return (course.name.toLowerCase().includes(coursesToSearch.toLowerCase()));
		});

		setCoursesSearched(coursesFinded);
	}, [coursesToSearch]);

	const handleRemoveSave = useCallback(async(course_id: string) => {
		const savedCourses = await AsyncStorage.getItem('@e_learning:saved-courses');

		if(!!savedCourses){
			const removeCourse = JSON.parse(savedCourses).filter((course: ICourses) => course.id !== course_id);

			await AsyncStorage.setItem('@e_learning:saved-courses', JSON.stringify(removeCourse));
		}
		
		setCourseID('');
		setCourseName('');
		setOpenModalToRemoveSave(false);
	}, []);

	const handleOpenModalToRemoveSave = useCallback((course_name: string, course_id: string) => {
		setCourseID(course_id);
		setCourseName(course_name);
		setOpenModalToRemoveSave(true);
	}, []);

	const handleCloseModalToRemoveSave = useCallback(() => {
		setOpenModalToRemoveSave(false);
	}, []);

	const handleLogout = useCallback(async() => {
		await AsyncStorage.setItem('@e_learning:first-time', 'no');

		navigation.navigate('introdution');
	}, []);

	return(
		<Container>

			{!!openModalToRemoveSave && (
				<ModalToRemoveSave 
					course_name={courseName} 
					functionToCloseModal={handleCloseModalToRemoveSave}
					functionToRemoveSave={() => handleRemoveSave(courseID)}
				/>
			)}

			<InitialContainer>
				<LogoImage source={logoImg}/>

				<ButtonToLogout onPress={handleLogout}>
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
					<CategoriesText>Cursos salvos</CategoriesText>

					<CoursesNumberText>{coursesToSearch === '' ? courses.length : coursesSearched.length} cursos</CoursesNumberText>
				</InitialTextsContainer>

				<CoursesCardsContainer>
					{coursesToSearch === '' ? courses.map(course => (
						<CourseCard key={course.id} onPress={() => navigation.navigate('courseLessons', {course_id: course.id})}>
							<CourseImageAndExcludeOptionContainer>
								<CourseImage source={{uri: course.image}} />

								<ButtonToRemoveSave onPress={() => handleOpenModalToRemoveSave(course.name, course.id)}>
									<Feather name="trash" color="#C4C4D1" size={24}/>
								</ButtonToRemoveSave>
							</CourseImageAndExcludeOptionContainer>

							<CourseName>{course.name}</CourseName>
							<CourseLessonsNumber>{course.lessonsInCourse} Aulas</CourseLessonsNumber>
						</CourseCard>
					)) : coursesSearched.map(course => (
						<CourseCard key={course.id} onPress={() => navigation.navigate('courseLessons', {course_id: course.id})}>
							<CourseImageAndExcludeOptionContainer>
								<CourseImage source={{uri: course.image}} />

								<ButtonToRemoveSave>
									<Feather name="trash" color="#C4C4D1" size={24}/>
								</ButtonToRemoveSave>
							</CourseImageAndExcludeOptionContainer>

							<CourseName>{course.name}</CourseName>
							<CourseLessonsNumber>{course.lessonsInCourse} Aulas</CourseLessonsNumber>
						</CourseCard>
					))}
				</CoursesCardsContainer>
			</CoursesContainer>

			<ScreenNavigator whereIm="saved-courses"/>
		</Container>
	);
};

export default SavedCourses;