import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { photo, isLiked, setIsLiked, isModalVisible, setIsModalVisible } = props;
  const handleClick = () => {
    props.setIsModalVisible(false);
  };

  const similarPhotosArr = Object.values(photo.similar_photos)

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleClick}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <section className="photo-details-modal__top-bar">
        <PhotoFavButton photoId={photo.id} isLiked={isLiked[photo.id]} setIsLiked={setIsLiked} />
        <img className="photo-details-modal__image" src={photo.urls.regular} />
        </section>
        <section className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={photo.user.profile} />
          <div>
            <h2 className="photo-details-modal__photographer-info">{photo.user.name}</h2>
            <h2 className="photo-details-modal__photographer-location">{photo.location.city}, {photo.location.country}</h2>
          </div>
      </section>
      <h2 className="photo-details-modal__header"> Similar Photos</h2>
      <section className="photo-details-modal__images">
        <PhotoList photos={similarPhotosArr} isLiked={isLiked} setIsLiked={setIsLiked} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}/>
      </section>
    </div >
  );
};

export default PhotoDetailsModal;
