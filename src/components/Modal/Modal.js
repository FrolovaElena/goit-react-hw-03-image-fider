import React, { Component, createRef } from 'react';
import propTypes from 'prop-types';
import styles from './Modal.module.css';

export default class Modal extends Component {
  static propTypes = {
    imageURL: propTypes.string.isRequired,
    onClose: propTypes.func.isRequired,
  };

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = event => {
    if (event.code !== 'Escape') return;

    this.props.onClose();
  };

  handleBackdropClick = event => {
    const { current } = this.backdropRef;

    if (current && event.target !== current) {
      return;
    }

    this.props.onClose();
  };

  render() {
    const { imageURL } = this.props;
    return (
      <div
        className={styles.overlay}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
        onKeyPress={this.handleKeyPress}
        role="presentation"
      >
        <div className={styles.modal}>
          <img src={imageURL} alt="" />
        </div>
      </div>
    );
  }
}
