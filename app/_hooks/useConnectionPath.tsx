import { useEffect, useState } from "react";

type Position = "top" | "right" | "bottom" | "left";

export const useConnectionPath = (
  containerRef: React.RefObject<HTMLElement | null>,
  fromRef: React.RefObject<HTMLElement | null>,
  toRef: React.RefObject<HTMLElement | null>,
  fromPosition: Position,
  toPosition: Position,
  fromOffset: number = 0,
  toOffset: number = 0
) => {
  const [path, setPath] = useState("");

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const fromRect = fromRef.current.getBoundingClientRect();
        const toRect = toRef.current.getBoundingClientRect();

        // Calculate relative positions
        const fromX = fromRect.left - containerRect.left;
        const fromY = fromRect.top - containerRect.top;
        const toX = toRect.left - containerRect.left;
        const toY = toRect.top - containerRect.top;

        // Determine connection points based on position prop
        let startX, startY, endX, endY, midX, midY;

        switch (fromPosition) {
          case "right":
            startX = fromX + fromRect.width;
            startY = fromY + fromRect.height / 2 + fromOffset;
            break;
          case "left":
            startX = fromX;
            startY = fromY + fromRect.height / 2 + fromOffset;
            break;
          case "bottom":
            startX = fromX + fromRect.width / 2 + fromOffset;
            startY = fromY + fromRect.height;
            break;
          case "top":
            startX = fromX + fromRect.width / 2 + fromOffset;
            startY = fromY;
            break;
        }

        switch (toPosition) {
          case "right":
            endX = toX;
            endY = toY + toRect.height / 2 + toOffset;
            break;
          case "left":
            endX = toX + toRect.width;
            endY = toY + toRect.height / 2 + toOffset;
            break;
          case "bottom":
            endX = toX + toRect.width / 2 + toOffset;
            endY = toY;
            break;
          case "top":
            endX = toX + toRect.width / 2 + toOffset;
            endY = toY + toRect.height;
            break;
        }

        // Calculate midpoint for 90-degree turn
        if (fromPosition === "left" || fromPosition === "right") {
          midX = endX;
          midY = startY;
        } else {
          midX = startX;
          midY = endY;
        }

        const pathD = `M ${startX} ${startY} L ${midX} ${midY} L ${endX} ${endY}`;
        setPath(pathD);
      }
    };

    // Initial update
    updatePath();

    // Update on resize
    const resizeObserver = new ResizeObserver(updatePath);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [
    containerRef,
    fromRef,
    toRef,
    fromPosition,
    toPosition,
    fromOffset,
    toOffset,
  ]);

  return path;
};
