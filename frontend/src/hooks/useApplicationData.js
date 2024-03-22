const { useState } = require("react");

function useApplicationData() {
  const [isLiked, setIsLiked] = useState({});
  const [isFavPhoto, setFavPhoto] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState({ visible: false, photoId: 0 });

  // const updateToFavPhotoIds = (photoId) => {
  //   toggleFavPhoto(photoId);
  //   toggleLike(photoId);
  // };

  // const toggleFavPhoto = (photoId) => {
  //   setFavPhoto(prev => {
  //     const newFav = [...prev];
  //     if (newFav.length === 0 || !newFav.find(element => element === photoId)) {
  //       newFav.push(photoId);
  //       return newFav;
  //     }
  //     if (newFav.find(element => element === photoId)) {
  //       const index = newFav.indexOf(photoId);
  //       newFav.splice(index, 1);
  //       return newFav;
  //     }
  //   });
  // };

  // const toggleLike = (photoId) => {
  //   setIsLiked(prev => {
  //     const newState = { ...prev };
  //     if (!newState[photoId]) {
  //       newState[photoId] = true;
  //       return newState;
  //     }
  //     if (newState[photoId] === true) {
  //       newState[photoId] = false;
  //       return newState;
  //     }
  //   });
  // };

  // const setPhotoSelected = (photoId) => {
  //   setIsModalVisible(prev => {
  //     const newObj = { ...prev, visible: true, photoId };
  //     return newObj;
  //   });
  // };

  // const onClosePhotoDetailsModal = () => {
  //   setIsModalVisible(prev => {
  //     const newObj = { ...prev, visible: false, photoId: 0 };
  //     return newObj;
  //   });
  // };

  const state = {
    isLiked,
    isFavPhoto,
    // isFavPhotoExist,
    isModalVisible,
  };

  return {
    state,
    setIsLiked,
    setFavPhoto,
    setIsModalVisible
    // updateToFavPhotoIds,
    // setPhotoSelected,
    // onClosePhotoDetailsModal
  };

}

export default useApplicationData;


// const [isModalVisible, setIsModalVisible] = useState({visible: false, photoId: 0})
// const [isLiked, setIsLiked] = useState({})
// const isFavPhotoExist = (Object.values(isLiked).some(element => element === true))
// const modalDisplay = (
//   (isModalVisible.visible && <PhotoDetailsModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}  isLiked={isLiked} setIsLiked={setIsLiked} isFavPhotoExist={isFavPhotoExist} photo={photos.find(element => element.id === isModalVisible.photoId)}/>)
// )