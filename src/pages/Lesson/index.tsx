import React, { useEffect, useState, useRef, useCallback } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import YoutubePlayer from 'react-native-youtube';

import api from './../../services/api';

import informations from "./../../../env.json";

import {Container,
		InitialContainer,
		BackButton,
		LogoImage,
		LessonInformationsContainer,
		LessonTitle,
		LessonNumberAndTimeContainer,
		NumberText,
		LessonTimeContainer,
		TimeText,
		LessonDescriptionText,
		PreviousAndNextLessonContainer,
		PreviousButtonContainer,
		PreviousButtonText,
		NextButtonContainer,
		NextButtonText} from './styles';

import { useRoute, useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

import logoImg from './../../../assets/Pages/Home/Logotipo.png';

interface IParams{
	params: {
		lesson_id: string;
		video_id: string;
		lesson_index: number;
	}
}

interface ILesson{
	id: string;
	video_id: string;
	name: string;
	description: string;
	duration: number;
}

const Lesson: React.FC = () => {
	const videoRef = useRef<YoutubePlayer>(null);

	const { params } = useRoute<IParams>();
	const navigation = useNavigation();

	const [lesson, setLessons] = useState({} as ILesson);

	const [readyToLoad, setReadyToLoad] = useState(false);

	const [courseLessons, setCourseLessons] = useState<ILesson[]>([]);

	const [currentTime, setCurrentTime] = useState(0);

	useEffect(() => {
		async function loadApi(){
			const response = await api.get(`/lessons/${params.lesson_id}`);

			const courseLessons = await AsyncStorage.getItem('@e_learning:course_lessons');

			if(!!courseLessons){
				setCourseLessons(JSON.parse(courseLessons));
			}

			setLessons(response.data);
		}

		loadApi();
	}, [params]);

	useEffect(() => {
		async function loadVideoInformations(){
			const videoCurrentTime = await videoRef.current?.getCurrentTime();

			setCurrentTime(!!videoCurrentTime ? videoCurrentTime : 0);
			//console.log(videoCurrentTime);
		}

		if(!!readyToLoad){
			loadVideoInformations();
		}
	}, [readyToLoad, videoRef]);

	console.log(currentTime);

	return(
		<Container>
			<InitialContainer>
				<BackButton onPress={() => navigation.goBack()}>
					<Feather name="arrow-left" color="#FF6680" size={24}/>
				</BackButton>

				<LogoImage source={logoImg}/>
			</InitialContainer>

			<YoutubePlayer 
				ref={videoRef}
				apiKey={`${informations.extra.youtube_api_key}`}
				videoId={params.video_id}
				play={false}
				style={{ height: 200, width: '100%' }}
				onReady={() => setReadyToLoad(true)}
				onChangeState={e => console.log(e)}
			/>

			<LessonInformationsContainer>
				<LessonTitle>{lesson.name}</LessonTitle>

				<LessonNumberAndTimeContainer>
					<NumberText>Aula {params.lesson_index + 1}</NumberText>

					<LessonTimeContainer>
						<Feather name="clock" color="#A0A0B2" size={16}/>

						<TimeText>{parseInt(String(lesson.duration/60))}min</TimeText>
					</LessonTimeContainer>
				</LessonNumberAndTimeContainer>

				<LessonDescriptionText>{lesson.description}</LessonDescriptionText>
			</LessonInformationsContainer>

			<PreviousAndNextLessonContainer>
				<PreviousButtonContainer 
					isTheFirst={params.lesson_index - 1 === -1} 
					onPress={() => navigation.navigate('lesson', { lesson_id: courseLessons[params.lesson_index - 1].id, video_id: courseLessons[params.lesson_index - 1].video_id, lesson_index: params.lesson_index - 1 })}
				> 
					<Feather name="arrow-left" size={20} color="#FF6680"/>
					<PreviousButtonText>Aula anterior</PreviousButtonText>
				</PreviousButtonContainer>

				<NextButtonContainer 
					isTheLast={params.lesson_index + 1 === courseLessons.length} 
					isTheFirst={params.lesson_index - 1 === -1} 
					onPress={() => navigation.navigate('lesson', { lesson_id: courseLessons[params.lesson_index + 1].id, video_id: courseLessons[params.lesson_index + 1].video_id, lesson_index: params.lesson_index + 1 })}
				>
					<NextButtonText>Próxima aula</NextButtonText>
					<Feather name="arrow-right" size={20} color="#FFFFFF"/>
				</NextButtonContainer>
			</PreviousAndNextLessonContainer>
		</Container>
	);
};

export default Lesson;