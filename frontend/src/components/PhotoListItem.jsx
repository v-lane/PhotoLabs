import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  const { sampleData } = props

  return (
    <article className="photo-list__item">
    <img className="photo-list__image" src={sampleData.imageSource}/>
    <section className="photo-list__user-details">
    <img className="photo-list__user-profile"src={sampleData.profile}/>
    <div>
    <h2 className="photo-list__user-info">{sampleData.username}</h2>
    <h2 className="photo-list__user-location">{sampleData.location.city}, {props.sampleData.location.country}</h2>
    </div>
    </section>
    </article>
  )
};

export default PhotoListItem;
