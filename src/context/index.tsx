import { SubjectsProvider } from "./Subjects";

interface ProviderProps {
  children: React.ReactNode;
}

const AppProviders = ({ children }: ProviderProps) => (
  <SubjectsProvider>{children}</SubjectsProvider>
);

export default AppProviders;
