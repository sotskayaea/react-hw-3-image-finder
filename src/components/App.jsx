import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

// import { ToastContainer } from 'react-toastify';

export class App extends Component {
  state = {
    value: null,
  };

  onSubmitForm = newValue => {
    this.setState({ value: newValue });
  };
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSubmitForm} />
        <ImageGallery value={this.state.value} />
      </div>
    );
  }
}
