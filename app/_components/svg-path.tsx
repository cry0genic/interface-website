"use client";
import React from "react";

export const SvgPath = ({
  path,
  hovered,
}: {
  path: string;
  hovered?: boolean;
}) => {
  return (
    <svg
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    >
      {/* Base path - solid when hovered, dashed when not */}
      <path
        d={path}
        stroke="rgb(100, 100, 100)"
        strokeWidth="1"
        fill="none"
        strokeOpacity="0.4"
        strokeDasharray={hovered ? "none" : "5,5"}
        className={hovered ? "" : "animate-dash"}
      />
      {/* Animated blue line that appears on hover */}
      {hovered && (
        <path
          d={path}
          stroke="#3b82f6"
          strokeWidth="1"
          fill="none"
          strokeDasharray="100"
          className="animate-blue-dash"
        />
      )}
    </svg>
  );
};
