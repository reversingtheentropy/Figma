export type ReadingStatus = 'want-to-read' | 'reading' | 'read' | 'none';

export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  description: string;
  category: string;
  pages: number;
  publishedYear: number;
  rating: number;
  status: ReadingStatus;
}
