import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your component screens here (assuming you have these components defined)
import { Home, SignUp } from 'screens'
import { useSelector } from 'react-redux';
// import Home from './Home';
// import Notifications from './Notifications';
// import Profile from './Profile';
// import Settings from './Settings';

type RootStackParamList = {
  Home: undefined;
  SignUp: undefined;
  Feed: { sort: 'latest' | 'top' } | undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  const accessToken = useSelector(state => state?.auth?.accessToken);
  return (
    <RootStack.Navigator >
      {accessToken ? <RootStack.Screen name="Home" component={Home} options={{
        gestureEnabled: false,
        headerShown: false
      }} /> : <RootStack.Screen name="SignUp" component={SignUp} options={{
        gestureEnabled: false,
        headerShown: false
      }} />}




    </RootStack.Navigator>
  );
}

export default MainNavigator;