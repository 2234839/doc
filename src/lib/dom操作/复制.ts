export const copy = (str: string) => {
  return navigator.clipboard.writeText(str);
};
