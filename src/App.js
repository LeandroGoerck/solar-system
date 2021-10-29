import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <>
        <p>Sistema Solar Maravilhoso</p>
        <Header />
        <SolarSystem />
        <Missions />
      </>
    );
  }
}

export default App;
