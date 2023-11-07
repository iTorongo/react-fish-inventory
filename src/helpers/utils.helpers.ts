import { format } from "date-fns";

export const DATE_FORMAT = "dd-MMM-yyyy";
export const DEFAULT_DATE_TIME_FORMAT = "dd-MMM-yyyy HH:mm";

export const capitalizeFirstLetter = (value: string) => {
  return value[0].toUpperCase() + value.slice(1)?.toLowerCase();
};

export const ISOToDefaultDateTimeFormat = (
  timestamp: string,
  formatString: string = DEFAULT_DATE_TIME_FORMAT
): string => {
  const date = new Date(timestamp);
  return format(date, formatString);
};
