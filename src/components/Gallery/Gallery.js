import React from 'react';
import propTypes from 'prop-types';
import GalleryItem from '../GalleryItem/GalleryItem';
import styles from './Gallery.module.css';

const Gallery = ({ items, onOpen }) => (
  <ul className={styles.gallery}>
    {items.map(item => (
      <li key={item.id}>
        <GalleryItem {...item} onOpen={() => onOpen(item.largeImageURL)} />
      </li>
    ))}
  </ul>
);

Gallery.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      largeImageURL: propTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onOpen: propTypes.func.isRequired,
};

export default Gallery;
