import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  return (
    <article className="photo-list__item">
    <img className="photo-list__image" src={props.photoPic}/>
    <section className="photo-list__user-details">
    <img className="photo-list__user-profile"src={props.profilePic}/>
    <div>
    <h2 className="photo-list__user-info">{props.name}</h2>
    <h2 className="photo-list__user-location">{props.city}, {props.country}</h2>
    </div>
    </section>
    </article>
  )
};

export default PhotoListItem;
