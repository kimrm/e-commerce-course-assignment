import { useRef, useEffect } from "react";

export default function usePageTitle(title: string) {
  const prevTitleRef = useRef(document.title);
  useEffect(() => {
    const previousTitle = prevTitleRef.current;
    document.title = title;
    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}
