import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

const PhotoList = () => {
const photosList = photos.map(photo => {
  return <PhotoListItem
  key={ photo.id }
  city={ photo.location.city }
  country={ photo.location.country }
  name={ photo.user.name }
  profilePic={ photo.user.profile }
  photoPic={ photo.urls.full }
  />;
});

  return (
    <ul className="photo-list">
      {photosList}
    </ul>
  );
};

export default PhotoList;
