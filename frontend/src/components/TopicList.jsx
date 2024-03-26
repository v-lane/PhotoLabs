import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = (props) => {
  const { topics, getPhotosByTopic, colorClass } = props;

  const topicsDetails = topics.map(topic => {
    return < TopicListItem
      key={topic.id}
      topicId={topic.id}
      title={topic.title}
      getPhotosByTopic={getPhotosByTopic}
      colorClass={colorClass}
    />;
  });

  return (
    <div className="top-nav-bar__topic-list">
      {topicsDetails}
    </div>
  );
};

export default TopicList;
