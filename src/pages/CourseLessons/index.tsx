import React, { useEffect, useState, useCallback } from 'react';

import { useRoute, useNavigation } from '@react-navigation/native';

import api from './../../services/api';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {Container, 
		InitialContainer,
		BackButton,
		LogoImage,
		SaveButton,
		LessonsContainer,
		CourseInformationsContainer,
		CourseName,
		LessonsNumber,
		LessonContainer,
		PlayerContainer,
		LessonName,
		LessonInfomationsContainer,
		LessonNumber,
		LessonTimeConatainer,
		LessonTimeText,
		LessonCompleteContainer,
		LessonCompleteText} from './styles';

import { Feather, FontAwesome } from '@expo/vector-icons';

import logoImg from './../../../assets/Pages/Home/Logotipo.png';

interface IParams{
	params: {
		course_id: string;
	}
}

interface ICourse{
	id: string;
	name: string;
}

interface ILessons{
	id: string;
	duration: number;
	name: string;
	video_id: string;
}

interface IApiResult{
	course: ICourse;
	lessons: ILessons[];
}

const CourseLessons: React.FC = () => {
	const { params } = useRoute<IParams>();
	const navigation = useNavigation();

	const [course, setCourse] = useState({} as IApiResult);
	const [loading, setLoading] = useState(true);

	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		async function loadApi(){
			api.defaults.headers.mac_address = 'test';

			const response = await api.get(`/courses/${params.course_id}/lessons`);

			const savedCourses = await AsyncStorage.getItem('@e_learning:saved-courses');

			if(!!savedCourses){
				const checkIfCourseIsSaved = JSON.parse(savedCourses).find((course: ICourse) => course.id === response.data.course.id);
			
				if(!!checkIfCourseIsSaved){
					setIsFavorite(true);
				}
			}

			await AsyncStorage.setItem('@e_learning:course_lessons', JSON.stringify(response.data.lessons));

			setCourse(response.data);
			setLoading(false);
		}

		loadApi();
	}, []);

	const handleFavorite = useCallback(async() => {
		const savedCourses = await AsyncStorage.getItem('@e_learning:saved-courses');
		
		if(JSON.parse(String(savedCourses)).length === 0){
			const formatData = {...course.course, lessonsInCourse: course.lessons.length};
			const dataToSave = [formatData]

			await AsyncStorage.setItem('@e_learning:saved-courses', JSON.stringify(dataToSave));
		}

		if(JSON.parse(String(savedCourses)).length >= 1){
			const formatSavedCourses = JSON.parse(String(savedCourses));

			if(!isFavorite){
				formatSavedCourses.push({...course.course, lessonsInCourse: course.lessons.length});

				await AsyncStorage.setItem('@e_learning:saved-courses', JSON.stringify(formatSavedCourses));
			}

			if(!!isFavorite){
				const deleteSavedFromCourse = formatSavedCourses.filter((courseFinded: ICourse) => courseFinded.id !== course.course.id);

				await AsyncStorage.setItem('@e_learning:saved-courses', JSON.stringify(deleteSavedFromCourse));
			}
		}

		//await AsyncStorage.removeItem('@e_learning:saved-courses');

		setIsFavorite(!isFavorite);
	}, [isFavorite, course]);

	return(
		<Container>
			<InitialContainer>
				<BackButton onPress={() => navigation.goBack()}>
					<Feather name="arrow-left" color="#FF6680" size={24}/>
				</BackButton>

				<LogoImage source={logoImg}/>

				<SaveButton onPress={handleFavorite}>
					{!!isFavorite ? (<FontAwesome name="heart" color="#FF6680" size={24}/>) :(<Feather name="heart" color="#FF6680" size={24}/>)}
				</SaveButton>
			</InitialContainer>

			<LessonsContainer>
				{!loading && (
					<>
					<CourseInformationsContainer>
						<CourseName>{course.course.name}</CourseName>
						<LessonsNumber>{course.lessons.length} Aulas</LessonsNumber>
					</CourseInformationsContainer>

					{course.lessons.map((lesson, index) => (
						<LessonContainer key={lesson.id} onPress={() => navigation.navigate('lesson', { lesson_id: lesson.id, video_id: lesson.video_id, lesson_index: index + 1 })}>
							<PlayerContainer>
								<Feather  
									name="play" 
									color="#FFFFFF" 
									size={24}/>
							</PlayerContainer>

							<LessonName>{lesson.name}</LessonName>

							<LessonInfomationsContainer>
								<LessonNumber>Aula {index + 1}</LessonNumber>

								<LessonTimeConatainer>
									<Feather name="clock" color="#C4C4D1" size={12}/>
									<LessonTimeText>{parseInt(String(lesson.duration/60))} min</LessonTimeText>
								</LessonTimeConatainer>

								<LessonCompleteContainer>
									<LessonCompleteText>Completo</LessonCompleteText>
								</LessonCompleteContainer>
							</LessonInfomationsContainer>
						</LessonContainer>
					))}
					</>
				)}
			</LessonsContainer>
		</Container>
	);
};

export default CourseLessons;