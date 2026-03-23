import { useState } from "react";
import { useSubjects } from "../context/Subjects";

function ChatBot() {
  const [openChat, setOpenChat] = useState(false);
  const { subjects, selectedSubject } = useSubjects();

  const toggleChat = () => {
    setOpenChat((prev) => !prev);
  };

  return (
    <div className="chatbot-container">
      {openChat ? (
        <div className="chat-container">
          {!selectedSubject ? (
            <div className="chat-subjects">
              {subjects.map((subject) => (
                <p>{subject.name}</p>
              ))}
            </div>
          ) : (
            <div className="chat-sub-with-topics">
              <p className="chat-sel-sub">
                Selected Subject: {selectedSubject.name}
              </p>
              <p className="topics-heading">Topics:</p>
              {selectedSubject.topics.map((topic) => (
                <p>{topic.name}</p>
              ))}
            </div>
          )}
        </div>
      ) : null}
      <div className="chat-button" onClick={toggleChat}>
        <p>{openChat ? "X" : "O"}</p>
      </div>
    </div>
  );
}

export default ChatBot;
