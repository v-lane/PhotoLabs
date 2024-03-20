import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "mocks/topics";


const TopicList = () => {

  const topicsList = topics.map(topic => {
    return < TopicListItem
      key={topic.id}
      title={topic.title}
    />;
  });

  return (
    <div className="top-nav-bar__topic-list">
      {topicsList}
    </div>
  );
};

export default TopicList;
