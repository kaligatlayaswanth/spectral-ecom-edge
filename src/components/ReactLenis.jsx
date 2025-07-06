import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export function ReactLenis({ root, options, children }) {
  const wrapperRef = useRef(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    lenisRef.current = new Lenis({
      wrapper: wrapperRef.current,
      ...options,
    });
    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenisRef.current.destroy();
    };
  }, [options]);

  if (root) {
    return (
      <div ref={wrapperRef} style={{ height: "100vh", overflow: "hidden" }}>
        {children}
      </div>
    );
  }
  return children;
} 