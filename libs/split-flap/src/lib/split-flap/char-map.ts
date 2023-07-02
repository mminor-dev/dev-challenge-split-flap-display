export const CHARS = Array.from('0123456789 abcdefghijklmnopqrstuvwxyz');
export const CHAR_IDX_MAP = new Map<string, number>(CHARS.map((char, i) => [char, i]));

export const DEFAULT_IDX = CHAR_IDX_MAP.get(' ') ?? 0;
export const EMPTY_IDX = 0;
