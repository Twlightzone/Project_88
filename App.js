import * as React from 'react';
import { createSwitchNavigator, creatAppContainer } from 'react-navigation';

import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';

import firebase from 'firebase';
import { firebaseConfig } from './config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen : LoadingScreen,
  LoginScreen : LoginScreen,
  DashboardScreen : DashboardScreen
})

const AppNavigator = creatAppContainer(AppSwitchNavigator)

export default function App() {
  return(
    <AppNavigator/>
  )
}