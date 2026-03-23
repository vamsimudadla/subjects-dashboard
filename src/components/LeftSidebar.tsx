import { useSubjects } from "../context/Subjects";

function LeftSidebar() {
  const { subjects, selectedSubject, updateSelectedSubject } = useSubjects();

  return (
    <div className="left-container">
      <h1 className="left-heading">Subjects</h1>
      <div className="subjects-container">
        {subjects.map((subject) => (
          <div
            className={`subject ${selectedSubject?.name === subject.name ? "subject-selected" : ""}`}
            key={subject.name}
            role="button"
            onClick={() => {
              updateSelectedSubject(subject);
            }}
          >
            {subject.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeftSidebar;
