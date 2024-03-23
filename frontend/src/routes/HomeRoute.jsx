import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const { photos, topics, favs, updateToFavPhotoIds, isFavPhotoExist, onPhotoSelect } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist} />
      <PhotoList photos={photos} favs={favs} updateToFavPhotoIds={updateToFavPhotoIds} onPhotoSelect={onPhotoSelect} />
    </div>
  );
};

export default HomeRoute;
