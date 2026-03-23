import { createContext, useContext, useState } from "react";
import type { ISubject } from "../../types";
import { subjects } from "../../constants";

interface SubjectsContextValue {
  subjects: ISubject[];
  selectedSubject: ISubject | null;
  updateSelectedSubject: (subject: ISubject) => void;
}

interface ProviderProps {
  children: React.ReactNode;
}

const SubjectsContext = createContext<SubjectsContextValue>({
  selectedSubject: null,
  subjects: [],
  updateSelectedSubject: () => {},
});

export function SubjectsProvider({ children }: ProviderProps) {
  const subjects = useProviderSubjects();
  return (
    <SubjectsContext.Provider value={subjects}>
      {children}
    </SubjectsContext.Provider>
  );
}

export const useSubjects = () => {
  return useContext(SubjectsContext);
};

export const useProviderSubjects = () => {
  const [selectedSubject, setSelectedSubject] = useState<ISubject | null>(null);

  const updateSelectedSubject = (subject: ISubject) => {
    setSelectedSubject(subject);
  };

  return { selectedSubject, subjects, updateSelectedSubject };
};
