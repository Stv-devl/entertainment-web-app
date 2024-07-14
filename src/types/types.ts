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
  bookmarkedItems?: string[];
}

export interface MediaDataType {
  media: Media[];
  users: Users[];
  loading: boolean;
  error: string | null;
}

export interface FormDataLogin {
  email: string;
  password: string;
}

export interface FormDataSignUp {
  username: string;
  email: string;
  password: string;
}

export interface InputProps {
  name: string;
  type: string;
  handleChange: (value: { [key: string]: string }) => void;
  value: string;
  placeholder?: string;
  error?: string;
}

export interface SearchProps {
  searchBar: string;
  handleChange: (value: { [key: string]: string }) => void;
  placeholder: string;
}

export interface RecommendedProps {
  media: Media[];
}
export interface TrendingProps {
  bookmarked: Media[];
}

export interface RecommendedProps {
  media: Media[];
}

export interface UseFilterWithIdReturn {
  media: Media[];
  bookmarked: Media[];
  loading: boolean;
  error: any;
}

export interface CardsProps {
  data: Media[];
}

export interface CardsWrapperProps {
  isSearching: boolean;
  filteredData: Media[];
  datas: Media[];
  title: string;
}

export interface UseManageFilterProps {
  media?: Media[];
  seriesData?: Media[];
  moviesData?: Media[];
  bookmarked?: Media[];
}

export interface UseManageFilterReturn {
  searchBar: string;
  filteredData: Media[];
  handleChange: (updates: { [key: string]: string }) => void;
  isSearching: boolean;
}

export type ValidationErrors = {
  username: string;
  email: string;
  password: string;
};
