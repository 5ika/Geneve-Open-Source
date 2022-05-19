type Project = {
  id: string;
  createdTime: string;
  fields: ProjectFields;
};

type ProjectFields = {
  Name: string;
  Technos: string[];
  URL: string;
  Description: string;
};
