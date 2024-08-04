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
  repeat: string;
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

export interface MediaProps {
  media: Media[];
}

export interface DataProps {
  data: Media[];
}

export interface UseFilterWithIdReturn {
  media: Media[];
  bookmarked: Media[];
  loading: boolean;
  error: any;
}

export interface TrendingProps {
  trendings: Media[];
}

export interface BookmarkedProps {
  bookmarked: Media[];
}
export interface IsBookmarked {
  isBookmarked: boolean;
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
  repeat: string;
};

export interface btnTrendingProps {
  onClick: () => void;
  iconSrc: string;
  alt: string;
  position: string;
}
