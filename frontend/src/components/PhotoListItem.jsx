import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";




const PhotoListItem = (props) => {
  return (
    <li className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={props.photoPic} />
      <section className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.profilePic} />
        <div>
          <h2 className="photo-list__user-info">{props.name}</h2>
          <h2 className="photo-list__user-location">{props.city}, {props.country}</h2>
        </div>
      </section>
    </li>
  );
};

export default PhotoListItem;
