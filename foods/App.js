import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigation from "./src/bottomTabNavigation/bottomTabMain"
import { Provider } from "react-redux"
import configureStore from "./src/redux/configureStore"

const store = configureStore()

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Food" component={BottomTabNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}








export default App;