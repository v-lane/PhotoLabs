import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const PhotoListItem = (props) => {
  const {photo, isLiked, updateToFavPhotoIds, onPhotoSelect} = props;

  return (
    <li className="photo-list__item">
      <PhotoFavButton photoId={photo.id} isLiked={isLiked} updateToFavPhotoIds={updateToFavPhotoIds} />
      <div onClick={() => onPhotoSelect(photo.id)}>
        <img className="photo-list__image" src={photo.urls.full} />
        <section className="photo-list__user-details">
          <img className="photo-list__user-profile" src={photo.user.profile} />
          <div>
            <h2 className="photo-list__user-info">{photo.user.name}</h2>
            <h2 className="photo-list__user-location">{photo.location.city}, {photo.location.country}</h2>
          </div>
        </section>
      </div>
    </li>
  );
};

export default PhotoListItem;