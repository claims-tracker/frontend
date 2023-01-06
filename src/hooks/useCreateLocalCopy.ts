import { useState, useEffect } from "react";

export function useCreateLocalCopy<T>(originalValue: T, updateOnChange = true) {
  const [value, setValue] = useState(originalValue);
  useEffect(() => {
    if (updateOnChange) {
      setValue(originalValue);
    }
  }, [originalValue, updateOnChange]);
  return [value, setValue] as const;
}
