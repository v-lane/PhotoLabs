import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const photos = props.photos.map(photo => {
    return <PhotoListItem
      key={photo.id}
      city={photo.location.city}
      country={photo.location.country}
      name={photo.user.name}
      profilePic={photo.user.profile}
      photoPic={photo.urls.full}
    />;
  });

  return (
    <ul className="photo-list">
      {photos}
    </ul>
  );
};

export default PhotoList;
