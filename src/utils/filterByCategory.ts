import { Media } from '@/types/types';

/**
 * Filters the media array to return only items that match the specified category.
 * @param {Media[]} media - The array of media items to be filtered.
 * @param {string} categories - The category to filter the media items by.
 * @returns {Media[]} An array of media items that belong to the specified category.
 */

export const getCategories = (media: Media[], categories: string): Media[] => {
  return media && media.length > 0
    ? media.filter((item) => item.category === categories)
    : [];
};
