export function removeEmptyStringProperties(obj: {}) {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value !== "")
  );
}
