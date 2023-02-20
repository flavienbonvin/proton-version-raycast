import { format } from "date-fns";

export const getFormattedDate = (dateString?: string) => {
  if (!dateString) {
    return "Error while formatting the date";
  }
  const date = new Date(dateString);
  return format(date, "MM-dd, hh:mm");
};
