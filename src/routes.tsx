import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
import Notification from './pages/Notification';
import Profile from './pages/Profile';
import Search from './pages/Search';
import New from './pages/New';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#121212',
          borderTopColor: 'transparent',
        },
        activeTintColor: '#fff',
        inactiveTintColor: 'grey',
        tabStyle: {
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name=" Notification"
        component={Notification}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="bell" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="New"
        component={New}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="plus" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="search" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
