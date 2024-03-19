import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  const { sampleData } = props

  return (
    <article>
    <img src={sampleData.imageSource}/>
    <img src={sampleData.profile}/>
    <h2>{sampleData.username}</h2>
    <h2>{sampleData.location.city} {props.sampleData.location.country}</h2>
    </article>
  )
};

export default PhotoListItem;
