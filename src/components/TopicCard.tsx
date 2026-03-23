import type { ITopic } from "../types";

interface ITopicCardProps {
  topic: ITopic;
}

function TopicCard({ topic }: ITopicCardProps) {
  return (
    <div className="topic-card">
      <p className="topic-name">{topic.name}</p>
      <hr />
      <p className="topic-description">{topic.description}</p>
    </div>
  );
}

export default TopicCard;
