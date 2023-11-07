/**
 * Capitalize first letter and lowercase rest of given value
 * @param value
 * @returns
 */
export const capitalizeFirstLetter = (value: string) => {
  return value[0].toUpperCase() + value.slice(1)?.toLowerCase();
};
