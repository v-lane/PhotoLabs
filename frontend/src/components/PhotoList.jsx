import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photos, favs,  updateToFavPhotoIds,  onPhotoSelect } = props;

  const photosDetails = photos.map(photo => {
    return <PhotoListItem
      key={photo.id}
      photo={photo}
      isLiked={favs.includes(photo.id)}
      updateToFavPhotoIds={updateToFavPhotoIds}
      onPhotoSelect={onPhotoSelect}
    />;
  });

  return (
    <ul className="photo-list">
      {photosDetails}
    </ul>
  );
};

export default PhotoList;
