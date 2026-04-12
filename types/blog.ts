export interface PostType {
  id: number;
  title: string;
  date: Date;
  content: string;
  slug: string;
  headings?: HeadingType[];
  tags: string[];
}

interface HeadingType {
  id: string;
  name: string;
}
