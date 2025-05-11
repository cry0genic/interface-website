import { useEffect, useState } from "react";

type Position = "top" | "right" | "bottom" | "left";

export const useConnectionPath = (
  containerRef: React.RefObject<HTMLElement | null>,
  fromRef: React.RefObject<HTMLElement | null>,
  toRef: React.RefObject<HTMLElement | null>,
  position: Position,
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

        // Determine connection points based on position prop
        let startX, startY, endX, endY, midX, midY;

        switch (position) {
          case "right":
            startX = fromX + fromRect.width;
            startY = fromY + fromRect.height / 2;
            endX = toX;
            endY = toY + toRect.height / 2;
            midX = startX + offset;
            midY = startY;
            const pathDRight = `M ${startX} ${startY} L ${midX} ${startY} L ${midX} ${endY} L ${endX} ${endY}`;
            setPath(pathDRight);
            break;
          case "left":
            startX = fromX;
            startY = fromY + fromRect.height / 2;
            endX = toX + toRect.width;
            endY = toY + toRect.height / 2;
            midX = startX - offset;
            midY = startY;
            const pathDLeft = `M ${startX} ${startY} L ${midX} ${startY} L ${midX} ${endY} L ${endX} ${endY}`;
            setPath(pathDLeft);
            break;
          case "bottom":
            startX = fromX + fromRect.width / 2;
            startY = fromY + fromRect.height;
            endX = toX + toRect.width / 2;
            endY = toY;
            midX = startX;
            midY = startY + offset;
            const pathDBottom = `M ${startX} ${startY} L ${startX} ${midY} L ${endX} ${midY} L ${endX} ${endY}`;
            setPath(pathDBottom);
            break;
          case "top":
            startX = fromX + fromRect.width / 2;
            startY = fromY;
            endX = toX + toRect.width / 2;
            endY = toY + toRect.height;
            midX = startX;
            midY = startY - offset;
            const pathDTop = `M ${startX} ${startY} L ${startX} ${midY} L ${endX} ${midY} L ${endX} ${endY}`;
            setPath(pathDTop);
            break;
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
  }, [containerRef, fromRef, toRef, position, offset]);

  return path;
};
