export const range = (start: number, stop: number, step = 1) => {
  if (start < stop) {
    return Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
  } else if (start > stop) {
    return Array.from({ length: (start - stop) / step + 1 }, (_, i) => start - i * step);
  }

  return [];
};
