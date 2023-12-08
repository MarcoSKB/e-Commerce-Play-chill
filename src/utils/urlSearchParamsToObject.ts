export function urlSearchParamsToObject(
  searchParams: URLSearchParams
): Record<string, string | string[]> {
  const obj: Record<string, string | string[]> = {};

  for (const [key, value] of searchParams) {
    if (obj[key]) {
      if (Array.isArray(obj[key])) {
        (obj[key] as string[]).push(value);
      } else {
        obj[key] = [obj[key] as string, value];
      }
    } else {
      obj[key] = value;
    }
  }

  return obj;
}
