import { useState, useReducer, useEffect } from 'react';
import reducer, { ACTIONS } from "reducers/photoLabsReducer";
import photos from 'mocks/photos';
import topics from 'mocks/topics';

function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    photos: [], // array of objects (photo data)
    topics: [], // array of objects (topics data)
    favs: [],  // array of strings(photo ids)
    selectedPhoto: "", // string of single photo id (for modal)
    displayPhotoDetails: {} // object of single photo details (for modal)
  });

  useEffect(() => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photos });
  }, []);

  useEffect(() => {
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topics });
  }, []);

  function addPhotoToFavs(photoId) {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });
  }

  function removePhotoFromFavs(photoId) {
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId });
  }

  function updateToFavPhotoIds(photoId) {
    if (state.favs.includes(photoId)) {
      removePhotoFromFavs(photoId);
    } else {
      addPhotoToFavs(photoId);
    }
  }

  function onPhotoSelect(photoId) {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photoId });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: photoId });
  }

  function onClosePhotoDetailsModal() {
    onPhotoSelect(''); // replace with empty string
  }

  return {
    photos: state.photos,
    topics: state.topics,
    favs: state.favs,
    selectedPhoto: state.selectedPhoto,
    displayPhotoDetails: state.displayPhotoDetails,
    updateToFavPhotoIds,
    onPhotoSelect,
    onClosePhotoDetailsModal
  };
}

export default useApplicationData;