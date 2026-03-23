import { useSubjects } from "../context/Subjects";
import TopicCard from "./TopicCard";

function RightContainer() {
  const { selectedSubject } = useSubjects();

  return (
    <div className="right-container">
      {selectedSubject ? (
        <div className="topics-container">
          {selectedSubject.topics.map((topic) => (
            <TopicCard topic={topic} key={topic.name} />
          ))}
        </div>
      ) : (
        <div className="empty-message">
          <p>No subject selected!</p>
        </div>
      )}
    </div>
  );
}

export default RightContainer;
