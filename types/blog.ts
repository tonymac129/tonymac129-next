export interface PostType {
  id: number;
  title: string;
  date: Date;
  content: string;
  slug: string;
  headings?: HeadingType[];
}

interface HeadingType {
  id: string;
  name: string;
}
