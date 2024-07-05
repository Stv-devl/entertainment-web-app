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

export interface Users {
  username: string;
  email: string;
  password: string;
  id: string;
}

export interface ApiContextType {
  userdata: Users[];
  mediadata: Media[];
  loading: boolean;
  error: Error | null;
}
