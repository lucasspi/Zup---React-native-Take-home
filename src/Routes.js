import React from 'react';
import { Router, Scene } from 'react-native-router-flux';


import Movies from './components/movies';
import MovieScreen from './components/movieScreen';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="movies"
          initial
          component={Movies}
          title="Movies"
          hideNavBar
        />
        <Scene
          key="movieScreen"
          component={MovieScreen}
          title="MovieScreen"
          hideNavBar
        />
      </Scene>
    </Router>
  );
}

export default App;