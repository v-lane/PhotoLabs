import { useReducer, useEffect } from 'react';
import reducer, { ACTIONS } from "reducers/photoLabsReducer";

function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    photos: [], // array of objects (photo data)
    topics: [], // array of objects (topics data)
    topicId: "", //current topicId of photos shown
    favs: [],  // array of strings(photo ids)
    selectedPhoto: "", // string of single photo id (for modal)
    displayPhotoDetails: {}, // object of single photo details (for modal)
    colorMode: 'Light' // string with 'Dark' or 'Light'
  });

  useEffect(() => {
    fetch(`/api/photos`)
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
  }, []);

  useEffect(() => {
    fetch(`/api/topics`)
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }));
  }, []);

  function setTopicId(topicId) {
    dispatch({ type: ACTIONS.SET_TOPIC_ID, payload: topicId });
  }

  function getPhotosByTopic(topicId) {
    if (topicId !== state.topicId) {
      setTopicId(topicId);
      fetch(`/api/topics/photos/${topicId}`)
        .then(res => res.json())
        .then(data => dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data }));
    }
  }

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

  function toggleDarkMode() {
    state.colorMode === 'Light' ? dispatch({ type: ACTIONS.SET_DARK_MODE, payload: 'Dark' }) : dispatch({ type: ACTIONS.SET_DARK_MODE, payload: 'Light' });
  }

  return {
    photos: state.photos,
    topics: state.topics,
    favs: state.favs,
    selectedPhoto: state.selectedPhoto,
    displayPhotoDetails: state.displayPhotoDetails,
    colorMode: state.colorMode,
    updateToFavPhotoIds,
    onPhotoSelect,
    onClosePhotoDetailsModal,
    getPhotosByTopic,
    toggleDarkMode
  };
}

export default useApplicationData;