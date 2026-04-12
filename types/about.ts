export interface StatusType {
  id: number;
  heading: string;
  name: string;
  image?: string;
  description: string;
  link: string;
}

export interface AboutType {
  id: number;
  name: string;
  link?: string;
  options: OptionType[];
}

export interface OptionType {
  id: number;
  name: string;
  titles: string[];
}
