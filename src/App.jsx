import {StyleSheet, Text, View, FlatList,} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Beranda from './screens/Tab/Beranda';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Pengaturan from './screens/Tab/Pengaturan';
import Profil from './screens/Tab/Profil';
import Icon from 'react-native-vector-icons/Ionicons';


const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Beranda' component={Beranda} options={{title: 'Beranda', headerTitleAlign: 'center',tabBarIcon: ({color, size}) => (
          <Icon name="home" size={30} color="#4F8EF7" />
        )}}/>
        <Tab.Screen name='Pengaturan' component={Pengaturan} options={{title: 'Pengaturan', headerTitleAlign: 'center',tabBarIcon: ({color, size}) => (
          <Icon name="cog" size={30} color="#4F8EF7" />
        )}}/>
        <Tab.Screen name='Profil' component={Profil} options={{title: 'Profil', headerTitleAlign: 'center',tabBarIcon: ({color, size}) => (
          <Icon name="person" size={30} color="#4F8EF7" />
        )}}/>
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tab" component={Tabs} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
