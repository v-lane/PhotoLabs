import React, { useState } from 'react';

import './App.scss';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import HomeRoute from 'routes/HomeRoute';
// import photos from 'mocks/photos';
// import topics from 'mocks/topics';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    favs,
    photos, 
    topics,
    selectedPhoto,
    displayPhotoDetails,
    updateToFavPhotoIds,
    onPhotoSelect,
    onClosePhotoDetailsModal
  } = useApplicationData();

  const isFavPhotoExist = (favs.length > 0);
  const modalDisplay = (
    (!!selectedPhoto && <PhotoDetailsModal onClosePhotoDetailsModal={onClosePhotoDetailsModal} favs={favs} updateToFavPhotoIds={updateToFavPhotoIds} isFavPhotoExist={isFavPhotoExist} displayPhotoDetails={displayPhotoDetails} selectedPhoto={selectedPhoto} onPhotoSelect={onPhotoSelect}/>)
  );

  return (
    <div className="App">
      {modalDisplay}
      <HomeRoute photos={photos} topics={topics} favs={favs} updateToFavPhotoIds={updateToFavPhotoIds} isFavPhotoExist={isFavPhotoExist} onPhotoSelect={onPhotoSelect} />
    </div>
  );
};

export default App;
