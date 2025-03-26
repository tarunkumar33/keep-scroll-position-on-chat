import { useRef, useLayoutEffect, useMemo } from "react";

const useKeepScrollPosition = (deps = []) => {
  const containerRef = useRef(null);
  const previousScrollPosition = useRef(0);

  useMemo(() => {
    if (containerRef?.current) {
      const container = containerRef?.current;
      previousScrollPosition.current =
        container?.scrollHeight - container?.scrollTop;
    }
  }, [...deps]);

  useLayoutEffect(() => {
    if (containerRef?.current) {
      const container = containerRef?.current || {};
      container.scrollTop =
        container?.scrollHeight - previousScrollPosition.current;
    }
  }, [...deps]);

  return {
    containerRef
  };
};

export default useKeepScrollPosition;
