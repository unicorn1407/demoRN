import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from 'navigation/navigation';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react'

export default function App() {
 
  const [fontsLoaded] = useFonts({
    Lato: require('./assets/fonts/Lato-Regular.ttf'),
  });
  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainNavigator>
            <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
              <App />
            </View>
          </MainNavigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
