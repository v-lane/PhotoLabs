import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const PhotoListItem = (props) => {
  const { setIsModalVisible } = props;
  const handleClick = () => {
    setIsModalVisible(true);
  };

  const { photo } = props;
  return (
    <li className="photo-list__item">
      <PhotoFavButton photoId={photo.id} isLiked={props.isLiked} setIsLiked={props.setIsLiked} />
      <div onClick={handleClick}>
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