
export interface Place {
  id: number;
  name: string;
  description: string;
  image: string;
  isFavorite: boolean;
  visited: Date | null;
}