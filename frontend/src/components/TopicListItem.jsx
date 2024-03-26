import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { title, topicId, getPhotosByTopic, colorClass } = props;
  return (
    <div className={"topic-list__item" + colorClass}>
      <span className={colorClass} onClick={() => getPhotosByTopic(topicId)}> {title} </span>
    </div>
  );
};

export default TopicListItem;
