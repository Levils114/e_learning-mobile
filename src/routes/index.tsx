import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Introdution from './../pages/Introdution/';
import Home from './../pages/Home/';
import SavedCourses from './../pages/SavedCourses';
import CourseLessons from './../pages/CourseLessons/';
import Lesson from './../pages/Lesson/';

const Routes: React.FC = () => {
	const Route = createStackNavigator();

	return(
		<Route.Navigator initialRouteName="introdution" screenOptions={{
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
	);
};

export default Routes;