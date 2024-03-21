import React, {useState} from 'react';

import './App.scss';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState({visible: false, photoId: 0})
  const modalDisplay = (
    (isModalVisible.visible && <PhotoDetailsModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} photo={photos.find(element => element.id === isModalVisible.photoId)}/>)
  )

  return (
    <div className="App">
      {modalDisplay}
      <HomeRoute photos={photos} topics={topics} setIsModalVisible={setIsModalVisible}/>
    </div>
  );
};

export default App;
