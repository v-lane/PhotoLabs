import React from 'react';
import '../styles/PhotoFavButton.scss';
import FavBadge from './FavBadge';

function PhotoFavButton(props) {
  const { photoId, isLiked, updateToFavPhotoIds } = props;

  return (
    <div onClick={() => { updateToFavPhotoIds(photoId); }} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavBadge isLiked={isLiked} />
      </div>
    </div>
  );
}

export default PhotoFavButton;