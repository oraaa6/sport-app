export const calculateDateFromISOtoYYYY_MM_DD = (date: string) => {
  return new Date(date).toISOString().substring(0, 10);
};
