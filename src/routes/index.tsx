import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Introdution from './../pages/Introdution/';
import Home from './../pages/Home/';
import CourseLessons from './../pages/CourseLessons/';

const Routes: React.FC = () => {
	const Route = createStackNavigator();

	return(
		<Route.Navigator initialRouteName="introdution" screenOptions={{
			headerShown: false
		}}>
			<Route.Screen name="introdution" component={Introdution}/>
			<Route.Screen name="home" component={Home}/>
			<Route.Screen name="courseLessons" component={CourseLessons}/>
		</Route.Navigator>
	);
};

export default Routes;