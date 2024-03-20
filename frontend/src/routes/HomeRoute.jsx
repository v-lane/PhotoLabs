import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const [isLiked, setIsLiked] = useState({})
  const isLikedValues = Object.values(isLiked)
  const isFavPhotoExist = (
    (Object.values(isLiked).some(element => element === true) && true) ||
    (!Object.values(isLiked).some(element => element === true) && false)
  )
  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList photos={props.photos} isLiked={isLiked} setIsLiked={setIsLiked}/>
    </div>
  );
};

export default HomeRoute;
