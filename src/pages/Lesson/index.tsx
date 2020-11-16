import React, { useEffect, useState } from 'react';

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
	name: string;
	description: string;
	duration: number;
}

const Lesson: React.FC = () => {
	const { params } = useRoute<IParams>();
	const navigation = useNavigation();

	const [lesson, setLessons] = useState({} as ILesson);

	useEffect(() => {
		async function loadApi(){
			const response = await api.get(`/lessons/${params.lesson_id}`);

			setLessons(response.data);
		}

		loadApi();
	}, []);

	return(
		<Container>
			<InitialContainer>
				<BackButton onPress={() => navigation.goBack()}>
					<Feather name="arrow-left" color="#FF6680" size={24}/>
				</BackButton>

				<LogoImage source={logoImg}/>
			</InitialContainer>

			<YoutubePlayer 
				apiKey={`${informations.extra.youtube_api_key}`}
				videoId={params.video_id}
				play={false}
				style={{ height: 200, width: '100%' }}
				getCurrentTime={(e: any) => console.log(e)}
			/>

			<LessonInformationsContainer>
				<LessonTitle>{lesson.name}</LessonTitle>

				<LessonNumberAndTimeContainer>
					<NumberText>Aula {params.lesson_index}</NumberText>

					<LessonTimeContainer>
						<Feather name="clock" color="#A0A0B2" size={16}/>

						<TimeText>{parseInt(String(lesson.duration/60))}min</TimeText>
					</LessonTimeContainer>
				</LessonNumberAndTimeContainer>

				<LessonDescriptionText>{lesson.description}</LessonDescriptionText>
			</LessonInformationsContainer>

			<PreviousAndNextLessonContainer>
				<PreviousButtonContainer>
					<Feather name="arrow-left" size={20} color="#FF6680"/>
					<PreviousButtonText>Aula anterior</PreviousButtonText>
				</PreviousButtonContainer>

				<NextButtonContainer>
					<NextButtonText>Próxima aula</NextButtonText>
					<Feather name="arrow-right" size={20} color="#FFFFFF"/>
				</NextButtonContainer>
			</PreviousAndNextLessonContainer>
		</Container>
	);
};

export default Lesson;