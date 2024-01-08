import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ColorRing } from 'react-loader-spinner';
import axios from 'axios';
import { nanoid } from 'nanoid';

import LoadMore from 'components/LoadMore/LoadMore';
import ModalComponent from 'components/Modal/Modal';

class ImageGallery extends Component {
  state = {
    items: [],
    status: '',
    error: null,
    page: 1,
    value: '',
    total: null,
    openedItem: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { value } = this.props;
    const { page } = this.state;
    if (prevProps.value !== this.props.value) {
      this.setState({ status: 'pending' });

      this.fetchGallery(value, page);
    }

    if (prevState.page !== this.state.page) {
      this.setState({ status: 'pending' });
      this.fetchGallery(value, page);
    }
  }
  async fetchGallery(value, page) {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${value}&page=${page}&key=41658493-0c962b72c0029aba7b0f0613c&image_type=photo&orientation=horizontal&per_page=12`
      );
      console.log(response.data.total);
      if (response.data.hits.length !== 0) {
        this.setState({
          items: [...this.state.items, ...response.data.hits],
          status: 'resolved',
          value: value,
          total: response.data.total,
        });
      } else {
        throw new Error(`We can't find photos with name ${this.props.value}`);
      }
    } catch (error) {
      this.setState({ status: 'rejected', error: error, items: [] });
    }
  }

  onLoadMore = newPage => {
    this.setState({ page: newPage });
  };

  handleModal = item => {
    if (!item) {
      this.setState({ openedItem: null });
      return;
    }
    this.setState({ openedItem: item });
  };

  render() {
    const { status, items, error, page, total } = this.state;
    return (
      <div>
        {items.length > 0 && (
          <ul>
            {items.map(item => {
              return (
                <ImageGalleryItem
                  handleModal={this.handleModal}
                  item={item}
                  key={nanoid()}
                />
              );
            })}
          </ul>
        )}
        {status === 'pending' && (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        )}
        {total > 12 && status === 'resolved' && (
          <LoadMore onLoadMore={this.onLoadMore} page={page} />
        )}
        {status === 'rejected' && <p>{error.message}</p>}
        {this.state.openedItem && (
          <ModalComponent
            item={this.state.openedItem}
            handleModal={this.handleModal}
          />
        )}
      </div>
    );
  }
}
export default ImageGallery;
