import { useEffect, useState } from "react";

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    console.log(window.scrollY);
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return scrollPosition;
}
export default useScrollPosition;
