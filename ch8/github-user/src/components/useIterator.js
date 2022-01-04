import { useCallback, useState, useMemo } from "react";

export const useIterator = (
  items=[],
  initialIndex = 0
) => {
  const [i, setIndex] = useState(initialIndex? initialIndex: 0);
  // console.log(`current index : ${i}`);

  const prev = useCallback(() => {
    if (i===0) return setIndex (items.length -1);
    setIndex(i-1);
  }, [i]);

  const next = useCallback(() =>{
    if (i === items.length -1) return setIndex(0);
    setIndex(i+1);
  }, [i]);

  const item = useMemo(()=> items[i], [i]);

  return [item || items[i], prev, next];
};