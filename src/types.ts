export interface ITopic {
  name: string;
  description: string;
}

export interface ISubject {
  name: string;
  topics: ITopic[];
}
