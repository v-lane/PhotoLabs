import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const [isLiked, setIsLiked] = useState({})
  const isFavPhotoExist = (Object.values(isLiked).some(element => element === true))
  
  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList photos={props.photos} isLiked={isLiked} setIsLiked={setIsLiked} setIsModalVisible={props.setIsModalVisible}/>
    </div>
  );
};

export default HomeRoute;
