import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { photo } = props;
  return (
    <li className="photo-list__item">
      <PhotoFavButton photoId={photo.id} isLiked={props.isLiked} setIsLiked={props.setIsLiked} />
      <img className="photo-list__image" src={photo.urls.full} />
      <section className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} />
        <div>
          <h2 className="photo-list__user-info">{photo.user.name}</h2>
          <h2 className="photo-list__user-location">{photo.location.city}, {photo.location.country}</h2>
        </div>
      </section>
    </li>
  );
};

export default PhotoListItem;

// key={photo.id}
// photoid={photo.id}
// city={photo.location.city}
// country={photo.location.country}
// name={photo.user.name}
// profilePic={photo.user.profile}
// photoPic={photo.urls.full}
// isLiked={props.isLiked[photo.id]} 
// setIsLiked={props.setIsLiked}