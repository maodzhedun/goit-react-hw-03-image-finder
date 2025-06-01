import React, { Component } from 'react';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from "components/ImageGallery/ImageGallery";

class App extends Component {
  state = {
    searhImage: '',
  };


  handleSearch = searhImage => {
    console.log("App-searsh image", searhImage)
    console.log("App-searsh state", this.state);
    this.setState({ searhImage });
  };

  render() {
    return (
      <div>
        <Searchbar handleSearch={this.handleSearch}/>
        <ImageGallery searhImage={this.state.searhImage}/>
      </div>
    );
  }
}

export default App;
