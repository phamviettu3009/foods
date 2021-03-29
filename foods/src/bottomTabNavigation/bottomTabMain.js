import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/home';
import FoodScreen from '../screens/foods';

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <Tab.Navigator
			tabBarOptions={{
				activeTintColor: 'royalblue',
			}}
		>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="md-home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
				name="Food" 
				component={FoodScreen} 
				options={{
          tabBarLabel: 'Food',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-fast-food-outline" color={color} size={size} />
          ),
        }}
				/>
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;

