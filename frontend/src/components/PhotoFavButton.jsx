import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import FavBadge from './FavBadge';

function PhotoFavButton(props) {
  const { isLiked, setIsLiked, photoId } = props;

  const handleClick = () => {
    setIsLiked(prev => {
      const newState = { ...prev, [photoId]: true };
      return newState;
    });
  };

  return (
    <div onClick={handleClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavBadge isLiked={isLiked} />
      </div>
    </div>
  );
}

export default PhotoFavButton;