import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const [isLiked, setIsLiked] = useState({})
  const isFavPhotoExist = (
    (Object.keys(isLiked).length > 0 && true) ||
    (Object.keys(isLiked).length === 0 && false)
  )

  console.log('isLiked State', isLiked);
  console.log('isFavPhotoExist', isFavPhotoExist);

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList photos={props.photos} isLiked={isLiked} setIsLiked={setIsLiked}/>
    </div>
  );
};

export default HomeRoute;
