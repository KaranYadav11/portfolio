"use client";

import { cn } from "../../lib/utils";
import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
  useMotionValue,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

export function Pointer({
  className,
  style,
  children,
  ...props
}: Omit<HTMLMotionProps<"div">, "ref">): JSX.Element | null {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isActive, setIsActive] = useState(false);
  const [shouldRender, setShouldRender] = useState(false); // 👈 controls rendering
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run this on client
    if (typeof window === "undefined") return;

    // Check for touch device
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      setShouldRender(false); // Don't render on mobile
    } else {
      setShouldRender(true); // Render on desktop
    }
  }, []);

  useEffect(() => {
    if (!shouldRender || !containerRef.current) return;

    const parentElement = containerRef.current.parentElement;
    if (!parentElement) return;

    parentElement.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => setIsActive(false);

    parentElement.addEventListener("mousemove", handleMouseMove);
    parentElement.addEventListener("mouseenter", handleMouseEnter);
    parentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      parentElement.style.cursor = "";
      parentElement.removeEventListener("mousemove", handleMouseMove);
      parentElement.removeEventListener("mouseenter", handleMouseEnter);
      parentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [shouldRender, x, y]);

  if (!shouldRender) return null; // 👈 Disable rendering completely on mobile

  return (
    <>
      <div ref={containerRef} className="z-50" />
      <AnimatePresence>
        {isActive && (
          <motion.div
            className={cn(
              "transform-[translate(-50%,-50%)] pointer-events-none fixed z-50",
              className
            )}
            style={{
              top: y,
              left: x,
              ...style,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            {...props}
          >
            {children || (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="1"
                viewBox="0 0 16 16"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                className={cn(
                  "rotate-[-70deg] stroke-white text-black",
                  className
                )}
              >
                <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
              </svg>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
