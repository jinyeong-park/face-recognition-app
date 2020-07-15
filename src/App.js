import React from 'react';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar/Navbar';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particlesOptions} />
        <Navbar />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/*
        <FaceRecognition> */}

      </div>
    );

  }
}

export default App;
