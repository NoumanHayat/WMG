/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable react/prop-types */
// /* eslint-disable react-native/no-inline-styles */
import React, { } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  ImageBackground,
  Text,
  View,
} from 'react-native';
import { images, SIZES } from '../../constants';
const Stack = createNativeStackNavigator();
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './account/SignIn';
import Search from './dashboard/search';
import dashboard from './dashboard';
// import { TouchableOpacity } from 'react-native-gesture-handler'; 
function AppStarting() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Dashboard" component={dashboard} />
      <Stack.Screen name="Search" component={Search} />
      {/* <Stack.Screen name="proposalDetails" component={proposalDetails} />
      <Stack.Screen name="Chat" component={chat} /> */}
    </Stack.Navigator>
  );
}
export default AppStarting;