

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'
};

export default function reducer(state, action) {
  switch (action.type) {
    case 'SET_PHOTO_DATA':
      return { ...state, photos: action.payload };
    case 'FAV_PHOTO_ADDED':
      return { ...state, favs: [...state.favs, action.payload] };
    case 'FAV_PHOTO_REMOVED': {
      const newState = { ...state };
      const index = newState.favs.indexOf(action.payload);
      if (index > -1) newState.favs.splice(index, 1);
      return newState;
    }
    case 'SET_TOPIC_DATA':
      return { ...state, topics: action.payload };
    case 'GET_PHOTOS_BY_TOPICS':
      return { ...state, photos: action.payload };
    case 'SELECT_PHOTO':
      return { ...state, selectedPhoto: action.payload };
    case 'DISPLAY_PHOTO_DETAILS':
      return { ...state, displayPhotoDetails: state.photos.find(element => element.id === action.payload) };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );

  }
}
