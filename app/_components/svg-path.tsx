import React from "react";

export const SvgPath = ({ path }: { path: string }) => {
  return (
    <svg
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    >
      <path
        d={path}
        stroke="rgb(100, 100, 100)"
        strokeWidth="2"
        fill="none"
        strokeOpacity="0.4"
        strokeDasharray="5,5"
        className="animate-dash"
      />
    </svg>
  );
};
