import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Splash, Slider} from './pages';
import Router from './router';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};
//   return <Splash />;
// };
export default App;
