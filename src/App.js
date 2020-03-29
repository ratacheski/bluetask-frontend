import React, {Component} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {

  //constructor(props) {
  //  super(props);
  //}

  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Navbar/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
