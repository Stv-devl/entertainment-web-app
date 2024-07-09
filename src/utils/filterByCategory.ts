import { Media } from '@/types/types';

export const getCategories = (media: Media[], categories: string): Media[] => {
  return media && media.length > 0
    ? media.filter((item) => item.category === categories)
    : [];
};
