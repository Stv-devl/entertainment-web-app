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
  bookmarkedItems: string[];
}

export interface MediaDataType {
  media: Media[];
  users: Users[];
  loading: boolean;
  error: string | null;
}

export interface FormData {
  email: string;
  password: string;
  error?: string;
}
