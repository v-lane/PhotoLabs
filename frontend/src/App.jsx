import React, {useState} from 'react';

import './App.scss';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    state,
    setIsLiked,
    setFavPhoto,
    setIsModalVisible
  } = useApplicationData()


  // const [isModalVisible, setIsModalVisible] = useState({visible: false, photoId: 0})
  // const [isLiked, setIsLiked] = useState({})
  const isFavPhotoExist = (Object.values(state.isLiked).some(element => element === true))
  const modalDisplay = (
    (state.isModalVisible.visible && <PhotoDetailsModal isModalVisible={state.isModalVisible} setIsModalVisible={setIsModalVisible}  isLiked={state.isLiked} setIsLiked={setIsLiked} isFavPhotoExist={isFavPhotoExist} photo={photos.find(element => element.id === state.isModalVisible.photoId)}/>)
  )



  return (
    <div className="App">
      {modalDisplay}
      <HomeRoute photos={photos} topics={topics}  isLiked={state.isLiked} setIsLiked={setIsLiked} isFavPhotoExist={isFavPhotoExist} setIsModalVisible={setIsModalVisible}/>
    </div>
  );
};

export default App;
