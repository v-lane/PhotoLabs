import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { onClosePhotoDetailsModal, favs, updateToFavPhotoIds, displayPhotoDetails, selectedPhoto, onPhotoSelect, colorClass } = props;

  const similarPhotosArr = Object.values(displayPhotoDetails.similar_photos);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => onClosePhotoDetailsModal()}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__fav-button" >
        <PhotoFavButton photoId={displayPhotoDetails.id} isLiked={favs.includes(displayPhotoDetails.id)} updateToFavPhotoIds={updateToFavPhotoIds} />
      </div>
      <section className="photo-details-modal__top-bar">
        <img className="photo-details-modal__image" src={displayPhotoDetails.urls.regular} />
      </section>
      <section className="photo-details-modal__photographer-details">
        <img className="photo-details-modal__photographer-profile" src={displayPhotoDetails.user.profile} />
        <div>
          <h2 className="photo-details-modal__photographer-info">{displayPhotoDetails.user.name}</h2>
          <h2 className="photo-details-modal__photographer-location">{displayPhotoDetails.location.city}, {displayPhotoDetails.location.country}</h2>
        </div>
      </section>
      <h2 className="photo-details-modal__header"> Similar Photos</h2>
      <section className="photo-details-modal__images">
        <PhotoList photos={similarPhotosArr} favs={favs} updateToFavPhotoIds={updateToFavPhotoIds} onPhotoSelect={onPhotoSelect} selectedPhoto={selectedPhoto} />
      </section>
    </div >
  );
};

export default PhotoDetailsModal;
