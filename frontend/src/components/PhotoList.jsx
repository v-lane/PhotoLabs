import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photos, isLiked, setIsLiked, setIsModalVisible } = props;
  const photosDetails = photos.map(photo => {
    return <PhotoListItem
      key={photo.id}
      photo={photo}
      isLiked={isLiked[photo.id]}
      setIsLiked={setIsLiked}
      setIsModalVisible={setIsModalVisible}
    />;
  });

  return (
    <ul className="photo-list">
      {photosDetails}
    </ul>
  );
};

export default PhotoList;
