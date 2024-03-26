import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const { photos, topics, favs, updateToFavPhotoIds, isFavPhotoExist, onPhotoSelect, getPhotosByTopic, toggleDarkMode, colorMode, colorClass } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist} getPhotosByTopic={getPhotosByTopic} toggleDarkMode={toggleDarkMode} colorMode={colorMode} colorClass={colorClass}/>
      <PhotoList photos={photos} favs={favs} updateToFavPhotoIds={updateToFavPhotoIds} onPhotoSelect={onPhotoSelect} colorClass={colorClass}/>
    </div>
  );
};

export default HomeRoute;
