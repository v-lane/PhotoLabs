import React, {useState} from 'react';

import './App.scss';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const modalDisplay = (
    (!isModalVisible) ||
    (isModalVisible && <PhotoDetailsModal setIsModalVisible={setIsModalVisible}/>)
  )

  return (
    <div className="App">
      {modalDisplay}
      <HomeRoute photos={photos} topics={topics} setIsModalVisible={setIsModalVisible}/>
    </div>
  );
};

export default App;
