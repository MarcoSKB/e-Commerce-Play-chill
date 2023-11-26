export const arrayRangeNumber = (minNumber: number, maxNumber: number) => {
  const arrayRange = [];
  if (maxNumber >= minNumber) {
    for (let i = minNumber; i <= maxNumber; i++) {
      arrayRange.push(i);
    }
  }
  if (minNumber > maxNumber) {
    for (let i = minNumber; i >= maxNumber; i--) {
      arrayRange.push(i);
    }
  }
  return arrayRange;
};
