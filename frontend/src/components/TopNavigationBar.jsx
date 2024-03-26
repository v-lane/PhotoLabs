import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const { topics, isFavPhotoExist, getPhotosByTopic, toggleDarkMode, colorMode, colorClass } = props;

  return (
    <div className="top-nav-bar">
      <span className={"top-nav-bar__logo" + colorClass} >PhotoLabs</span>
      <TopicList topics={topics} getPhotosByTopic={getPhotosByTopic} colorClass={colorClass}/>
      <FavBadge isFavPhotoExist={isFavPhotoExist} isLiked={isFavPhotoExist} colorClass={colorClass}/>
      <button className={"top-nav-bar__button" + colorClass} onClick={() => toggleDarkMode()}>{colorMode} </button>
    </div>
  );
};

export default TopNavigation;