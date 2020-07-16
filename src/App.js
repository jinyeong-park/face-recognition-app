import React from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navbar from './components/Navbar/Navbar';
import SignIn from './components/SignIn/SignIn';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import './App.css';


const app = new Clarifai.App({
  apiKey: 'b8fea556a92343fa81e0bd313786a263'
 });

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
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin'
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box})
  }

  onInputChange = (event) => {
    console.log('image address:', event.target.value);
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log('error happens',err));
  }

  onRouteChange = (route) => {
    this.setState({route: route})
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
         params={particlesOptions} />
        <Navbar onRouteChange={this.onRouteChange}/>
        { this.state.route === 'signin'
        ?
        <SignIn onRouteChange={this.onRouteChange}/>
        : <div>
            <Logo />
            <Rank />
            <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
        </div>
        }
      </div>
    );

  }
}

export default App;
