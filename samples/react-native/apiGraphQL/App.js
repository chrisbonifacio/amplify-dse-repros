/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import BlogScreen from './screens/BlogScreen';
import CreateBlogForm from './components/CreateBlogForm';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name="Blog"
          component={BlogScreen}
          options={{title: 'Blog'}}
        />
        <Stack.Screen
          name="Create"
          component={CreateBlogForm}
          options={{title: 'Create Blog'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
