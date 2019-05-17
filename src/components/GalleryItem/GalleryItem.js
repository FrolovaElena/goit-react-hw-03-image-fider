import React from 'react';
import propTypes from 'prop-types';
import styles from './GalleryItem.module.css';

const GalleryItem = ({
  webformatURL,
  likes,
  views,
  comments,
  downloads,
  onOpen,
}) => (
  <div className={styles.galleryItem}>
    <img src={webformatURL} alt="" />

    <div className={styles.stats}>
      <p className={styles.statsItem}>
        <i className="material-icons">thumb_up</i>
        {likes}
      </p>
      <p className={styles.statsItem}>
        <i className="material-icons">visibility</i>
        {views}
      </p>
      <p className={styles.statsItem}>
        <i className="material-icons">comment</i>
        {comments}
      </p>
      <p className={styles.statsItem}>
        <i className="material-icons">cloud_download</i>
        {downloads}
      </p>
    </div>
    <button type="button" className={styles.fullscreenButton} onClick={onOpen}>
      <i className="material-icons">zoom_out_map</i>
    </button>
  </div>
);

GalleryItem.propTypes = {
  webformatURL: propTypes.string.isRequired,
  likes: propTypes.number.isRequired,
  views: propTypes.number.isRequired,
  comments: propTypes.number.isRequired,
  downloads: propTypes.number.isRequired,
  onOpen: propTypes.func.isRequired,
};

export default GalleryItem;
