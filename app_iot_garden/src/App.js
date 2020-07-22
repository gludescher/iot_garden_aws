import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as View from './views';
import SplashScreen from 'react-native-splash-screen';

const Drawer = createDrawerNavigator();

export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Login">
          <Drawer.Screen name="Login" component={View.LoginScreen} />
          <Drawer.Screen name="Home" component={View.HomeScreen} />
          <Drawer.Screen name="Minhas Plantas" component={View.MinhasPlantasScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }  
}

console.disableYellowBox = true; // <-- This is to remove the react-navigation-swiper deprecated component warning
