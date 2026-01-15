import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppTabs from './src/navigation/AppNavigation';

const linking = {
  prefixes: ['meuapp://'],
  config: {
    screens: {
      HomeTab: {
        screens: {
          Details: 'details/:id',
        },
      },
    },
  },
};

export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <AppTabs />
    </NavigationContainer>
  );
}