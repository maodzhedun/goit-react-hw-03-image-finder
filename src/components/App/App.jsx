import React, { Component } from 'react';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';

class App extends Component {
  state = {
    searhImage: '',
  };

  handleSearch = searhImage => {
    this.setState({ searhImage });
  };

  render() {
    return (
      <div>
        <Searchbar handleSearch={this.handleSearch} />
        <ImageGallery searhImage={this.state.searhImage} />
      </div>
    );
  }
}

export default App;
