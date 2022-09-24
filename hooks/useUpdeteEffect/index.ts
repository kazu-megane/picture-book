import { useEffect, useRef } from "react";

type Args = Parameters<typeof useEffect>;

export function useUpdateEffect(effect: Args[0], deps: Args[1]) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
    } else {
      effect();
    }
  }, deps);
}
