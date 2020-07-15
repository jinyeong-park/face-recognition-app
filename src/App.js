import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Logo from './components/Logo/Logo.js';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Logo />
        {/*
        <ImageLinkForm>
        <FaceRecognition> */}

      </div>
    );

  }
}

export default App;
