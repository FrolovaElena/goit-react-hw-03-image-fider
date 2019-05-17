import React, { Component, Fragment } from 'react';
import { maxHeaderSize } from 'http';
import SearchForm from './SearchForm/SearchForm';
import Gallery from './Gallery/Gallery';
import Modal from './Modal/Modal';
import fetchImages from '../services/api';
import styles from './App.module.css';

export default class App extends Component {
  static propTypes = {};

  state = {
    images: [],
    page: 1,
    currentQuery: '',
    selectedImageURL: null,
    isOpen: false,
  };

  componentDidMount() {
    window.scrollTo({ top: maxHeaderSize, behavior: 'smooth' });
  }

  getImages = value => {
    const { page } = this.state;

    fetchImages(value, page).then(data =>
      this.setState({ images: data.data.hits, currentQuery: value }),
    );
    this.setState({
      images: [],
      page: 1,
      selectedImageURL: null,
      currentQuery: '',
    });
  };

  loadImages = () => {
    fetchImages(this.state.currentQuery, this.state.page).then(data =>
      this.setState(state => ({
        images: [...state.images, ...data.data.hits],
      })),
    );
  };

  openModal = url => this.setState({ isOpen: true, selectedImageURL: url });

  closeModal = () => this.setState({ isOpen: false });

  handleLoad = () => {
    this.setState(state => ({ page: state.page + 1 }), this.loadImages);
  };

  render() {
    const { images, isOpen, selectedImageURL } = this.state;

    return (
      <Fragment>
        <SearchForm onSubmit={this.getImages} />
        {images.length > 0 && (
          <Fragment>
            <Gallery
              items={images}
              getImageUrl={this.getImageUrl}
              onOpen={this.openModal}
              onClose={this.closeModal}
              isOpen={isOpen}
            />
            <button
              type="button"
              onClick={this.handleLoad}
              className={styles.button}
            >
              Load more
            </button>
          </Fragment>
        )}
        {isOpen && (
          <Modal imageURL={selectedImageURL} onClose={this.closeModal} />
        )}
      </Fragment>
    );
  }
}
