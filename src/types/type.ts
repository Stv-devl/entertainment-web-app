export interface Thumbnail {
  small: string;
  medium?: string;
  large: string;
}

export interface Media {
  title: string;
  thumbnail: {
    trending?: Thumbnail;
    regular: Thumbnail;
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export interface ApiContextType {
  data: Media[];
  loading: boolean;
  error: Error | null;
}
