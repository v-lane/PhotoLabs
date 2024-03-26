import React from 'react';
import '../styles/PhotoFavButton.scss';
import FavBadge from './FavBadge';

function PhotoFavButton(props) {
  const { photoId, isLiked, updateToFavPhotoIds, colorClass } = props;

  return (
    <div onClick={() => { updateToFavPhotoIds(photoId); }} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavBadge isLiked={isLiked} colorClass={colorClass}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;