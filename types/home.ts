export interface QuoteType {
  id: number;
  name: string;
  image: string;
  quote: string;
}

export interface CommentType {
  id: string;
  username: string;
  email?: string;
  content: string;
  date: Date;
  private?: boolean;
}

export interface ActionResponseType {
  success: boolean;
  message?: string;
  error?: string;
}
