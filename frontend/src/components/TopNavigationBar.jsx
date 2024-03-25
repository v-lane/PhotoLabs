import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const { topics, isFavPhotoExist, getPhotosByTopic } = props;


  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} getPhotosByTopic={getPhotosByTopic}/>
      <FavBadge isFavPhotoExist={isFavPhotoExist} isLiked={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;