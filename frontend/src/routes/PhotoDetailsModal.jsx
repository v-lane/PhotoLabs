import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  console.log('in modal, I rendered');
  // console.log('inModal. photo details', props.isModalVisible.photoId, props.photo);
  const handleClick = () => {
    props.setIsModalVisible(false);
  };
  const { photo } = props;

  const objToArray = (object) => {
    const similarPhotosArr = []
    const keys = Object.keys(object);
    for (const key of keys) {
      similarPhotosArr.push(object[key])
    }
    return similarPhotosArr
  }
  const similarPhotosArr = objToArray(photo.similar_photos)
  console.log(similarPhotosArr);


  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleClick}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <section className="photo-details-modal__top-bar">
        <PhotoFavButton photoId={photo.id} isLiked={props.isLiked[photo.id]} setIsLiked={props.setIsLiked} />
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
        <PhotoList photos={similarPhotosArr} isLiked={props.isLiked} setIsLiked={props.setIsLiked} isModalVisible={props.isModalVisible} setIsModalVisible={props.setIsModalVisible}/>
      </section>
    </div >
  );
};

export default PhotoDetailsModal;
