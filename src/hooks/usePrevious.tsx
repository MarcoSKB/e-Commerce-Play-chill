import { useRef } from "react";

function usePrevious<T>(value: T) {
  const currentRef = useRef(value);
  const previousRef = useRef<T | undefined>();

  if (currentRef.current !== value) {
    previousRef.current = currentRef.current;
    currentRef.current = value;
  }
  return previousRef.current;
}

export default usePrevious;
