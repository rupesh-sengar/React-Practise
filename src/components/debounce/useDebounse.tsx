export const useDebounce = (
  callback: (...args: any) => void,
  delay: number | undefined
) => {
  let timeout: number | null | undefined = null;
  return (...args: any) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
