export interface ProjectType {
  id: number;
  name: string;
  description?: string;
  link: string;
  date?: string;
  skills?: React.ReactNode[];
  tags: string[];
}
