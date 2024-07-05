import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Beranda from './screens/Tab/Beranda';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Pengaturan from './screens/Tab/Pengaturan';
import Profil from './screens/Tab/Profil';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabBarBackground = () => {
  return (
    <View style={styles.customTabBarBackground} />
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          if (route.name === 'Beranda') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Pengaturan') {
            iconName = focused ? 'cog' : 'cog-outline';
          } else if (route.name === 'Profil') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return (
            <View style={focused ? styles.iconContainerFocused : styles.iconContainer}>
              <Icon name={iconName} size={size} color={color} />
            </View>
          );
        },
        tabBarActiveTintColor: '#00FFFF',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          position: 'absolute',
          left: 10,
          right: 10,
          bottom: 10,
          height: 70,
          borderRadius: 20,
          backgroundColor: 'transparent',
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
        headerTitleAlign: 'center',
        tabBarBackground: () => <CustomTabBarBackground />,
      })}
    >
      <Tab.Screen name='Beranda' component={Beranda} options={{ title: 'Beranda', headerShown: false  }} />
      <Tab.Screen name='Pengaturan' component={Pengaturan} options={{ title: 'Pengaturan', headerShown: false }} />
      <Tab.Screen name='Profil' component={Profil} options={{ title: 'Profil', headerShown: false }} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tab" component={Tabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  customTabBarBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    borderRadius: 20,
    backgroundColor: '#ffff',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainerFocused: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D3D3D3', 
    borderRadius: 25, 
    padding: 10,
  },
});

export default App;
