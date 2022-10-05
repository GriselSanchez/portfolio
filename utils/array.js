export const ArrayUtils = {
  new2dArray: (width, height, fill) =>
    Array(height)
      .fill(fill)
      .map(() => Array(width).fill(fill)),
}
