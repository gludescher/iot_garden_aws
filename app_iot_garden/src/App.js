import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as View from './views';

const Drawer = createDrawerNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={View.HomeScreen} />
          <Drawer.Screen name="Notifications" component={View.NotificationsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}
