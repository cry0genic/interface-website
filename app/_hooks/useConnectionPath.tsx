import { useEffect, useState } from "react";

export const useConnectionPath = (
  containerRef: React.RefObject<HTMLElement | null>,
  fromRef: React.RefObject<HTMLElement | null>,
  toRef: React.RefObject<HTMLElement | null>,
  offset: number = 20
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

        // Determine connection points based on relative positions
        let startX, startY, endX, endY, midX, midY;

        // Determine which side of from element to connect from
        if (toX > fromX + fromRect.width) {
          // To element is to the right
          startX = fromX + fromRect.width;
          startY = fromY + fromRect.height / 2;
          endX = toX;
          endY = toY + toRect.height / 2;
          midX = startX + offset;
          midY = startY;
          const pathD = `M ${startX} ${startY} L ${midX} ${startY} L ${midX} ${endY} L ${endX} ${endY}`;
          setPath(pathD);
        } else if (toX + toRect.width < fromX) {
          // To element is to the left
          startX = fromX;
          startY = fromY + fromRect.height / 2;
          endX = toX + toRect.width;
          endY = toY + toRect.height / 2;
          midX = startX - offset;
          midY = startY;
          const pathD = `M ${startX} ${startY} L ${midX} ${startY} L ${midX} ${endY} L ${endX} ${endY}`;
          setPath(pathD);
        } else if (toY > fromY + fromRect.height) {
          // To element is below
          startX = fromX + fromRect.width / 2;
          startY = fromY + fromRect.height;
          endX = toX + toRect.width / 2;
          endY = toY;
          midX = startX;
          midY = startY + offset;
          const pathD = `M ${startX} ${startY} L ${startX} ${midY} L ${endX} ${midY} L ${endX} ${endY}`;
          setPath(pathD);
        } else {
          // To element is above
          startX = fromX + fromRect.width / 2;
          startY = fromY;
          endX = toX + toRect.width / 2;
          endY = toY + toRect.height;
          midX = startX;
          midY = startY - offset;
          const pathD = `M ${startX} ${startY} L ${startX} ${midY} L ${endX} ${midY} L ${endX} ${endY}`;
          setPath(pathD);
        }
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
  }, [containerRef, fromRef, toRef, offset]);

  return path;
};
