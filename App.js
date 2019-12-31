import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import ProfilePage from './pages/ProfilePage';
import RewardsPage from './pages/RewardsPage'
import IconWithBadge from './components/IconWithBadge'
const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    let iconName;
    let IconComponent = Ionicons;
    if (routeName === 'Home') {
      iconName = `ios-home`;
      // We want to add badges to home tab icon
      IconComponent = HomeIconWithBadge;
    } else if (routeName === 'Events' ) {
      iconName = `ios-list`;
    } else if (routeName === 'Profile' ) {
      iconName = `ios-person`;
    } else {
      iconName = `tags`;
    }
    // You can return any component that you like here!
    return <IconComponent name={iconName} size={25} color={tintColor} />;
    
  };
  const HomeIconWithBadge = props => {
    // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
    return <IconWithBadge {...props} badgeCount={3} />;
  };
const AppNavigator = createBottomTabNavigator({
    Home: {
      screen: HomePage
    },
    Events: {
      screen: EventsPage
    },
    Rewards:{
      screen: RewardsPage
    },
    Profile: {
        screen: ProfilePage
    }
  }, {
    initialRouteName: "Home",
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
  });
export default createAppContainer(AppNavigator)
