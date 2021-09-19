import * as React from "react";

const useMediaQuery: (query: string) => boolean = (query: string): boolean => {
  const media = window.matchMedia(query);
  const [matches, setMatches] = React.useState<boolean>(media.matches);

  React.useEffect(() => {
    // if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);

    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

export { useMediaQuery };
