import React, { useState } from 'react';

import './App.scss';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import HomeRoute from 'routes/HomeRoute';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    favs,
    photos,
    topics,
    selectedPhoto,
    displayPhotoDetails,
    colorMode,
    updateToFavPhotoIds,
    onPhotoSelect,
    onClosePhotoDetailsModal,
    getPhotosByTopic,
    toggleDarkMode
  } = useApplicationData();

  const isFavPhotoExist = (favs.length > 0);
  const modalDisplay = (
    (!!selectedPhoto && <PhotoDetailsModal onClosePhotoDetailsModal={onClosePhotoDetailsModal} favs={favs} updateToFavPhotoIds={updateToFavPhotoIds} isFavPhotoExist={isFavPhotoExist} displayPhotoDetails={displayPhotoDetails} selectedPhoto={selectedPhoto} onPhotoSelect={onPhotoSelect} colorClass={colorClass}/>)
  );

  const colorClass = (
    colorMode === "Light" ? "" : " dark"
  )

  return (
    <div className={"App" + colorClass} >
      {modalDisplay}
      <HomeRoute photos={photos} topics={topics} favs={favs} updateToFavPhotoIds={updateToFavPhotoIds} isFavPhotoExist={isFavPhotoExist} onPhotoSelect={onPhotoSelect} getPhotosByTopic={getPhotosByTopic} toggleDarkMode={toggleDarkMode} colorMode={colorMode} colorClass={colorClass}/>
    </div>
  );
};

export default App;
