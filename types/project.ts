export interface ProjectType {
  id: number;
  name: string;
  description?: string;
  image?: string;
  link: string;
  repo?: string;
  date?: string;
  skills?: React.ReactNode[];
  tags: string[];
}
