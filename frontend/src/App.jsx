import React from 'react';

import './App.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';

const App = () => {
  return (
    <div className="App">
      <TopNavigation />
      {/* <TopicList/> */}
      <PhotoList/>
    </div>
  );
};

export default App;
