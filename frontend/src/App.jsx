import React, {useState} from 'react';

import './App.scss';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState({visible: false, photoId: 0})
  const [isLiked, setIsLiked] = useState({})
  const isFavPhotoExist = (Object.values(isLiked).some(element => element === true))
  const modalDisplay = (
    (isModalVisible.visible && <PhotoDetailsModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}  isLiked={isLiked} setIsLiked={setIsLiked} isFavPhotoExist={isFavPhotoExist} photo={photos.find(element => element.id === isModalVisible.photoId)}/>)
  )

  return (
    <div className="App">
      {modalDisplay}
      <HomeRoute photos={photos} topics={topics}  isLiked={isLiked} setIsLiked={setIsLiked} isFavPhotoExist={isFavPhotoExist} setIsModalVisible={setIsModalVisible}/>
    </div>
  );
};

export default App;
