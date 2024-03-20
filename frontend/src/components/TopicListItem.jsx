import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (prop) => {
  return (
    <div className="topic-list__item">
      <p> {prop.title} </p>
    </div>
  );
};

export default TopicListItem;
