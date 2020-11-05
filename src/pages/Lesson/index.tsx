import React from 'react';

import YoutubePlayer from 'react-native-youtube';

import {Container,
		InitialContainer,
		BackButton,
		LogoImage} from './styles';

import { useRoute, useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

import logoImg from './../../../assets/Pages/Home/Logotipo.png';

interface IParams{
	params: {
		lesson_id: string;
		video_id: string;
	}
}

const Lesson: React.FC = () => {
	const { params } = useRoute<IParams>();
	const navigation = useNavigation();

	console.log(params.video_id);

	return(
		<Container>
			<InitialContainer>
				<BackButton onPress={() => navigation.goBack()}>
					<Feather name="arrow-left" color="#FF6680" size={24}/>
				</BackButton>

				<LogoImage source={logoImg}/>
			</InitialContainer>

			<YoutubePlayer 
				videoId={params.video_id}
				play
				style={{ height: 300 }}
			/>
		</Container>
	);
};

export default Lesson;