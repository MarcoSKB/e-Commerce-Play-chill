export const getValuesFromObjects = <T extends Record<string, any>>(
  data: T[],
  key: keyof T
) => {
  let hash: string[] = [];
  for (let i = 0; i < data.length; i++) {
    let object = data[i];

    if (object[key]) {
      hash.push(object[key]);
    }
  }
  return hash.join();
};
