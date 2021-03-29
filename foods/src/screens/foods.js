import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ProductTab from "../tab/products"
import CartTab from "../tab/cart"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
function FoodScreen() {
  return (
      <Tab.Navigator
        tabBarOptions={{
            activeTintColor: "royalblue",
            indicatorStyle: {
                backgroundColor: 'royalblue'
            },  
            style: {
                backgroundColor: "transparent"
            }
        }}
      >
        <Tab.Screen name="Products" component={ProductTab} />
        <Tab.Screen name="Cart" component={CartTab} />
      </Tab.Navigator>
  );
}
export default FoodScreen
