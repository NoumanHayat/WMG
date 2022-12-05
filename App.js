/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import { COLORS } from './constants';
import SplashScreen from 'react-native-splash-screen';
import AfterLoadSplashScreen from './screens/AfterLoadSplashScreen/AfterLoadSplashScreen';
import { DataProvider } from './screens/hooks';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen from './screens/Screens';
const Stack = createNativeStackNavigator();
const AppStarting = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
  const [getStarted, setGetStarted] = useState(false);

  return !getStarted ? (
    <AfterLoadSplashScreen onGetStarted={() => setGetStarted(true)} />
  ) : (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        paddingBottom: 0,
      }}>
      <View style={{ flex: 1 }}>
        {/* <Notification /> */}
        <NavigationContainer>
          {/* <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} /> */}
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="MainScreen">
            <Stack.Screen name="MainScreen" component={Screen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
};
export default function App() {
  return (
    <DataProvider>
      <AppStarting />
    </DataProvider>
  );
}
