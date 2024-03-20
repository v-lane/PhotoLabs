import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import FavBadge from './FavBadge';

function PhotoFavButton() {
  const [isLiked, setIsLiked] = useState(false)
  const handleClick = () => {
    if (!isLiked) {
      setIsLiked(true)
    }
  };

  return (
    <div onClick={handleClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavBadge isLiked={isLiked}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;