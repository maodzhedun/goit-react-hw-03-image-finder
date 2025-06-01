import React, { Component } from 'react';
import { getData } from 'components/services/api';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

const { IDLE, PENDING, REJECTED, RESOLVED } = STATUS;

class ImageGallery extends Component {
  state = {
    images: [],
    pages: 1,
    searhImage: '',
    status: IDLE,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.searhImage !== this.props.searhImage &&
      this.props.searhImage
    ) {
      this.fetchImages(this.props.searhImage);
    }
  }

  fetchImages = async query => {
    this.setState({ status: PENDING });

    try {
      const response = await getData(1, query); // Fetching the first page of results
      console.log(response.data.hits);
      this.setState({
        images: response.data.hits, // Assuming the response contains an array of hits
        status: RESOLVED,
      });
    } catch (error) {
      this.setState({
        error: error.message,
        status: REJECTED,
      });
    }
  };

  render() {
    const { images, status, error } = this.state;

    if (status === STATUS.IDLE) {
      return <div>Enter a search term to begin.</div>;
    }

    if (status === STATUS.PENDING) {
      return <div>Loading...</div>;
    }

    if (status === STATUS.REJECTED) {
      return <div>Error: {error}</div>;
    }

    if (status === STATUS.RESOLVED) {
      return (
        <ul className="gallery">
          {images.map(image => (
            <ImageGalleryItem key={image.id} image={image} />
          ))}
        </ul>
      );
    }

    return null;
  }
}

export default ImageGallery;
