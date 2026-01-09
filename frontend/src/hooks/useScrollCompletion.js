import { useEffect, useRef, useState } from "react";

export const useScrollCompletion = ({
  threshold = 1,
  root = null,
  rootMargin = "0px",
  once = true,
} = {}) => {
  const ref = useRef(null);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (completed && once) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCompleted(true);
          if (once) observer.disconnect();
        }
      },
      { threshold, root, rootMargin }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [completed, threshold, root, rootMargin, once]);

  return { ref, completed };
};
