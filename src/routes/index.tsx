import React, { useEffect, useState } from 'react';

import { View, ActivityIndicator } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { createStackNavigator } from '@react-navigation/stack';

import Introdution from './../pages/Introdution/';
import Home from './../pages/Home/';
import SavedCourses from './../pages/SavedCourses';
import CourseLessons from './../pages/CourseLessons/';
import Lesson from './../pages/Lesson/';

const Routes: React.FC = () => {
	const Route = createStackNavigator();

	const [isFirstTime, setIsFirstTime] = useState(true);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function checkFirstTime(){
			const checkIfIsTheFirstTime = await AsyncStorage.getItem('@e_learning:first-time');

			if(checkIfIsTheFirstTime === null){
				setIsFirstTime(true);
			} else{
				setIsFirstTime(false);
			}

			setLoading(false);
		}

		checkFirstTime();
	}, []);

	return(
		<>
			{!!loading ? (
				<View style={{ flex: 1, backgroundColor:"#6548A3", alignItems: 'center', justifyContent: 'center' }}>
					<ActivityIndicator size="large" color=" #FF6680"/>
				</View>	
			) : (
				<Route.Navigator initialRouteName={!!isFirstTime ? "introdution" : "home"} screenOptions={{
					headerShown: false
				}}>
					<Route.Screen name="introdution" component={Introdution}/>
					<Route.Screen name="home" component={Home} options={{
						animationEnabled: false
					}}/>
					<Route.Screen name="saved-courses" component={SavedCourses} options={{
						animationEnabled: false
					}}/>
					<Route.Screen name="courseLessons" component={CourseLessons}/>
					<Route.Screen name="lesson" component={Lesson}/>
				</Route.Navigator>
			)}
		</>
	);
};

export default Routes;