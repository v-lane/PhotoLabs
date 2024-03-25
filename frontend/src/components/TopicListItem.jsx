import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { title, topicId, getPhotosByTopic } = props;
  return (
    <div className="topic-list__item">
      <p onClick={() => getPhotosByTopic(topicId)}> {title} </p>
    </div>
  );
};

export default TopicListItem;
