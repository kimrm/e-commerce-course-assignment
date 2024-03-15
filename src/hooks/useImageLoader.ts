import { useState, useEffect } from "react";

interface ImageReturnTypes {
  isLoaded: boolean;
  isError: boolean;
}

export default function useImageLoader(src: string) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
      setIsError(false);
    };
    img.onerror = () => {
      setIsError(true);
    };
  }, [src]);

  return <ImageReturnTypes>{ isLoaded, isError };
}
