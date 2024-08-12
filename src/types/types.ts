import { FormEvent } from 'react';

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

export interface UseLoginReturn {
  handleSubmit: (e: FormEvent) => void;
  handleChange: (updates: Partial<FormDataLogin>) => void;
  formData: FormDataLogin;
  loginErrors: boolean;
}

export interface FormDataSignUp {
  username: string;
  email: string;
  password: string;
  repeat: string;
  bookmarkedItems: [];
}

export interface UseSignUpReturn {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  handleChange: (updates: Partial<FormDataSignUp>) => void;
  formData: FormDataSignUp;
  signupErrors: ValidationErrors;
}

export interface InputProps {
  name: string;
  type: string;
  handleChange: (value: { [key: string]: string }) => void;
  value: string;
  placeholder?: string;
  error?: string;
  autoComplete: string;
}

export interface SearchProps {
  searchBar: string;
  handleChange: (value: { [key: string]: string }) => void;
  placeholder: string;
}

export interface MediaProps {
  media: Media[];
}

export interface CardBookmarkedProps {
  isBookmarked: boolean;
  title: string;
  onToggleBookmark: (title: string) => void;
}

export interface UseBookmarkedReturn {
  bookmarkedItems: string[];
  handleToggleBookmark: (movieTitle: string) => Promise<void>;
}

export interface IsBookmarked {
  isBookmarked: boolean;
}

export interface CardsWrapperProps {
  isSearching: boolean;
  filteredData: Media[];
  media: Media[];
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

export type linkWrapperProp = {
  pathname: string;
};

export interface IconBookmarkedProps {
  isSelected?: boolean;
}
export interface UpdateBookmarkResponse {
  success: boolean;
  message?: string;
}
