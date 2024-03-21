import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const handleClick = () => {
    props.setIsModalVisible(false)
  }

  console.log('inModal. photo details', props.isModalVisible.photoId, props.photo);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleClick}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
